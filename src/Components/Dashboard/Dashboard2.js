import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
// import Modal from "../Utils/Modal";
import Vote from "./Vote";
import VoteResults from "./VoteResults";
import { useState } from "react";
import axios from "axios";
import { config } from "../../utils/Fetchapi";
import { baseUrl } from "../../utils/Fetchapi";
import Alert from "../Utils/Alert";

const Dashboard2 = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [candidateVote, setCanidateVote] = useState([]);
  const [alert, setAlert] = useState(null);
  const [voteId, setVotedId] = useState(0);
  const [isVoted, setIsVoted] = useState(false);
  // const [error, setError] = useState(null);

  const showCartHandler = (id) => {
    setVotedId(id);
    setShowModal(true);
  };

  // set alert
  const setAlertHandler = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert({ alert: null }), 10000);
  };

  const hideCartHandler = (id, voted) => {
    const newState = candidateVote.map((obj) => {
      if (obj.id === id) {
        axios
          .post(
            baseUrl() + "vote",
            {
              candidate_id: obj.id,
              user_id: user.id,
            },
            config
          )
          .then((response) => {
            const msg = response.data.message;
            if (msg === "You have already voted") {
              setAlertHandler("You have aleady Voted", "bg-red-800 text-white");
            } else {
              setAlertHandler(
                "You have Voted SuccessFully",
                "bg-[#005281] text-white"
              );
            }
            console.log(response);
            console.log(msg);
          })
          .catch((error) => console.log(error));
        setIsVoted(true);
      }

      return obj;
    });
    if (voted) {
      setCanidateVote(newState);
    }
    setShowModal(false);
  };

  useEffect(() => {
    const fetchCandiates = async () => {
      const response = await axios.get(baseUrl() + "candidate");
      const data = await response.data;
      setCanidateVote(data);
    };
    fetchCandiates();
  }, []);

  return (
    <div className="">
      <Navbar user={user} />

      <Alert alert={alert} />
      <section className="mx-auto">
        {showModal && (
          <VoteResults voteId={voteId} hideCart={hideCartHandler} />
        )}
        <Vote
          isVoted={isVoted}
          candidates={candidateVote}
          user={user}
          // votes={candidateVote}
          showCart={showCartHandler}
        />
      </section>
    </div>
  );
};
export default Dashboard2;
