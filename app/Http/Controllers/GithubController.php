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

        $owner = "kms77";
        $repo = "solana-final-project";

        // Get the authenticated user
        $user = Auth::user();

        try {
            $apiURL = "https://api.github.com/repos/$owner/$repo/commits";
            // make the API call to GitHub
            $response = Http::withHeaders([
                'Authorization' => "Bearer " . $user->github_token,
                'Accept' => 'application/vnd.github.v3+json',
            ])->get($apiURL, [
                'author' => $user->username
            ]);

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
}