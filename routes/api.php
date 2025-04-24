<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\GithubController;

Route::prefix('auth/github')->group(function () {
    Route::get('/', [RegisterController::class, 'signIn']);
    Route::get('callback', [RegisterController::class, 'signInCallback']);
});

Route::get('/test', function (Request $request) {
    return response()->json([
        'success' => true,
        'message' => 'Test route is working!',
    ], 200);
});

Route::prefix('github')->group(function () {
    Route::get('/data', [GithubController::class, 'getGithubData']);
});