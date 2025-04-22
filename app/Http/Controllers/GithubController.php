<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GithubController extends Controller
{
    public function getUserCommits(Request $request)
    {
        // Request validation
        $request->validate([
            'owner' => 'required|string', // repository owner (username or organization)
            'repo' => 'required|string', // repository name
            'token' => 'required|string', // github personal access token
        ]);

        $owner = $request->owner;
        $repo = $request->repo;
        $token = $request->token;

        try {
            // make the API call to GitHub
            $response = Http::withHeaders([
                'Authorization' => "Bearer $token",
                'Accept' => 'application/vnd.github.v3+json',
            ])->get("https://api.github.com/repos/$owner/$repo/commits");

        // Check if the response is successful
        if ($response->successful()) {
            // Filter the response to include only author and commit message
            $filteredCommits = collect($response->json())->map(function ($commit) {
                return [
                    'author' => $commit['commit']['author'] ?? null,
                    'message' => $commit['commit']['message'] ?? null,
                ];
            });

            return response()->json([
                'success' => true,
                'commits' => $filteredCommits,
            ]);
        }

            // Handle errors from GitHub API
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch commits from GitHub.',
                'error' => $response->json(),
            ], $response->status());
        } catch (\Exception $e) {
            // Handle exceptions
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while fetching commits.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}