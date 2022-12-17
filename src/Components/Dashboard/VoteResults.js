import Modal from "../Utils/Modal";

const VoteResults = ({ hideCart, voteId }) => {
  return (
    <Modal>
      <p className="text-center text-2xl">
        {" "}
        are you sure you want to vote for him
      </p>
      <div className="flex mt-10 flex-row justify-between">
        <button
          onClick={() => hideCart(voteId, false)}
          className=" px-3 border hover:bg-red-700 py-2"
        >
          No
        </button>
        <button
          onClick={() => hideCart(voteId, true)}
          className=" px-3 border hover:bg-white hover:text-lime-700 py-2"
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default VoteResults;
