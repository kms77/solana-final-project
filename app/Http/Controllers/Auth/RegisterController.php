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
        $url = Socialite::driver('github')->stateless()->redirect()->getTargetUrl();
        return response()->json([
            'success' => true,
            'url' => $url
        ], 200);
    }

    public function signInCallback(Request $request)
    {
        $github_user = Socialite::driver('github')->stateless()->user();

        // find or create the user in the database
        $user = User::updateOrCreate(
            ['github_id' => $github_user->id],
            [
                'name' => $github_user->name,
                'email' => $github_user->email,
                'username' => $github_user->nickname, 
                'avatar' => $github_user->avatar,
                'password' => Hash::make('Parola123!'),
            ]
        );

        // generate a token for the user
        $token = $user->createToken('github-auth')->plainTextToken;

        // return the token to the frontend
        return response()->json([
            'success' => true,
            'token' => $token,
            'user' => $user
        ], 200);
    }
}