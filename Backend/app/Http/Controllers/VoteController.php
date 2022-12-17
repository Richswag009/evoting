<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use App\Traits\HttpResponses;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\VoteCandidateRequest;

class VoteController extends Controller
{

    use HttpResponses;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(VoteCandidateRequest $request)
    {
        $request->validated($request->all()) ;
        

        if(Vote::where('user_id', $request->user_id)->first()){
            return $this->errors('','You have already voted', 200);
        }


        $vote = Vote::create([
            'user_id' =>Auth::user()->id,
            'candidate_id' => $request->candidate_id
        ]);
        
         return $this->success([
            'user'=>$vote,
            
        ]);
        // return 'success';


       
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePollVote(Request $request, $id)
    {
           $vote = Vote::create([
            'user_id' => $request->user_id,
            'candidate_id' => $request->candidate_id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
