<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\GithubController;

Route::prefix('auth')->group(function () {
    Route::get('/github', [RegisterController::class, 'sign_in']);
    Route::get('/github/callback', [RegisterController::class, 'sign_in_callback']);
});

Route::get('/test', function (Request $request) {
    return response()->json([
        'success' => true,
        'message' => 'Test route is working!',
    ], 200);
});

Route::get('/commits', [GithubController::class, 'getUserCommits']);