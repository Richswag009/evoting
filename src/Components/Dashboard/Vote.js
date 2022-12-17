import React from "react";
import VoteItem from "./VoteItem";
// import Card from "../Utils/Card";
// import Candidates from "./Candidates";

const Vote = ({ showCart, candidates, isVoted }) => {
  const allcandidates = candidates.map((candidate) => (
    <VoteItem
      name={candidate.name}
      key={candidate.id}
      id={candidate.id}
      onShowCart={showCart}
    />
  ));
  return (
    <div className="">
      <section className="flex flex-wrap justify-center w-full  gap-4 mx-auto my-32  container">
        {allcandidates}
      </section>
    </div>
  );
};

export default Vote;
