<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginUserRequest;
use App\Http\Requests\StoreUserRequest;

class AuthController extends Controller
{
    use HttpResponses;  

    public function login(LoginUserRequest $request){

        $request->validated($request->all()) ;
        
        if(!Auth::attempt($request->only(['email', 'password']))){
            return $this->errors('','Credentails dosent match', 401);
        }
        $user = User::where('email', $request->email)->first();

         return $this->success([
            'user'=>  $user,
            'token'=> $user->createToken('Api token of'. $user->name)->plainTextToken
         ], 'Login Succesfully', 200);
    }


    public function register(StoreUserRequest $request){
        $request->validated($request->all()) ;
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'nationality' => $request->nationality,
            'state' => $request->state,
            'dob' => $request->dob,
            'pvc' => $request->pvc,
            'email' => $request->email,
            'status' => false,
            'password' => Hash::make($request->password),
        ]);
        return $this->success([
            'user'=>$user,
            'token'=>$user->createToken('API token of' . $user->name)->plainTextToken  
        ]);
    }
    public function logout(){
        return response()->json('this is my logout page');
    }
}
