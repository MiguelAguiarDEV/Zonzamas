<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function registerUser(Request $request){
        $user = User::create([
            "name"=> $request->name,
            "email"=> $request->email,
            "password"=> Hash::make($request->password)
         ]);

         return redirect()->route('login');
    }
}

