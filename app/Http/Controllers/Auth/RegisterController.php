<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function signIn(Request $request)
    {
        $url = Socialite::driver('github')
            ->scopes(['user', 'repo'])
            ->stateless()
            ->redirect()
            ->getTargetUrl();        
        
        return response()->json([
            'success' => true,
            'url' => $url
        ], 200);
    }

    public function signInCallback(Request $request)
    {
        try {
            // Get GitHub user using the code from the request
            $github_user = Socialite::driver('github')
                ->stateless()
                ->user();
    
            // Find or create user
            $user = User::updateOrCreate(
                ['github_id' => $github_user->id],
                [
                    'name' => $github_user->name,
                    'email' => $github_user->email,
                    'username' => $github_user->nickname,
                    'avatar' => $github_user->avatar,
                    'github_token' => $github_user->token, // Save the GitHub token
                    'password' => Hash::make('Parola123!')
                ]
            );
    
            // Create Sanctum token
            $token = $user->createToken('github-auth')->plainTextToken;
    
            // return response()->json([
            //     'success' => true,
            //     'token' => $token,
            //     'github_token' => $github_user->token, // Send GitHub token to frontend
            //     'user' => $user
            // ], 200);
            return redirect('http://localhost:3000/dashboard?token='.$token);
        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Authentication failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}