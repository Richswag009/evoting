import React from "react";
import homeCover from "../../assets/home-cover.jpg";
import Navbar from "../Navbar/Navbar";
// import { useEffect } from "react";
// import axios from "axios";
// import { useState } from "react";

const Home = ({ user }) => {
  return (
    <div className="">
      <Navbar user={user} />
      <main className=" grid md:grid-cols-2 mx-auto m gap-4 my-28 px-5 container justify-center h-[70vh]">
        <div className="mt-8 ">
          <h1 className="text-[#005231] text-4xl font-bold">
            Online Voting Made Easy
          </h1>{" "}
          <p className=" my-8 text-xl tracking-widest">
            Easy Online Election Excellence{" "}
            <strong className="text-2xl text-[#002531]">9jaVotes</strong> <br />{" "}
            enables you to cast your votes online . it aslo enables you to get
            to know the various aspirants fo rthe various governmnet positions
            they are contesting for guarantees election integrity,boosts voter
            engagement and saves serious hours.
          </p>
          <span className="mx-auto bg-[#005231] text-white w-[50%] hover:bg-white tracking-tight hover:text-[#005231] hover:border-[#005231] border-2 px-5 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
            {" "}
            Get Started
          </span>
        </div>
        <img src={homeCover} alt="" className=" w-full h-[100%]  " />
      </main>
    </div>
  );
};

export default Home;
