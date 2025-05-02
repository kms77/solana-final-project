<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Helpers\GithubHelper;
use Illuminate\Support\Facades\Auth;

class GithubController extends Controller
{
    public function getGithubData(Request $request)
    {
        // request validation
        $request->validate([
            'owner' => 'required|string', // repository owner (username or organization)
            'repo' => 'required|string', // repository name
            'token' => 'required|string', // github personal access token
        ]);

        $owner = $request->owner;
        $repo = $request->repo;

        // Get the authenticated user
        $user = Auth::user();

        try {
            $apiURL = "https://api.github.com/repos/$owner/$repo/commits";
            // make the API call to GitHub
            $response = Http::withHeaders([
                'Authorization' => "Bearer " . $user->github_token,
                'Accept' => 'application/vnd.github.v3+json',
            ])->get($apiURL);

        // check if the response is successful
        if ($response->successful()) {
            $commits = $response->json();

            $total_commits = count($commits);

            // compute the report data using GithubHelper
            $report = GithubHelper::computeReportData($commits);

            // calculate tokens
            $tokens = $total_commits * 0.1;

            return response()->json([
                'success' => true,
                'report_data' => $report,
                'user' => [
                    'name' => $user->name,
                    'email' => $user->email,
                    'username' => $user->username,
                    'avatar' => $user->avatar,
                    'since' => $user->created_at->format('d-m-Y')
                ],
                'total_commits' => $total_commits,
                'tokens' => $tokens,
            ]);
        }

            // handle errors from GitHub API
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch commits from GitHub.',
                'error' => $response->json(),
            ], $response->status());
        } catch (\Exception $error) {
            // handle exceptions
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while fetching commits.',
                'error' => $error->getMessage(),
            ], 500);
        }
    }
    public function claimTokens(Request $request)
    {
        $request->validate([
            'wallet_address' => 'required|string',
        ]);
        $user = Auth::user();
    
        // 1. Calculate eligible tokens (based on unclaimed contributions)
        // 2. Send SPL tokens to $request->wallet_address using Solana SDK or microservice
        // 3. Record claim in DB
    
        // Example response:
        return response()->json([
            'success' => true,
            'message' => 'Tokens claimed successfully!',
            // Optionally: transaction signature, new balance, etc.
        ]);
    }
}