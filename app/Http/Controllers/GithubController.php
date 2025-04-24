<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Http\Helpers\GithubHelper;

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
        $token = $request->token;

        try {
            $apiURL = "https://api.github.com/repos/$owner/$repo/commits";
            // make the API call to GitHub
            $response = Http::withHeaders([
                'Authorization' => "Bearer $token",
                'Accept' => 'application/vnd.github.v3+json',
            ])->get($apiURL);

        // check if the response is successful
        if ($response->successful()) {
            $commits = $response->json();

            $filteredCommits = collect($response->json())->map(function ($commit) {
                return [
                    'author' => $commit['commit']['author'] ?? null,
                    'message' => $commit['commit']['message'] ?? null,
                ];
            });

            $total_commits = count($commits);

            // compute the report data using GithubHelper
            $report = GithubHelper::computeReportData($commits);

            // calculate tokens
            $tokens = $total_commits * 0.1;

            return response()->json([
                'success' => true,
                'commits' => $filteredCommits,
                'report_data' => $report,
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