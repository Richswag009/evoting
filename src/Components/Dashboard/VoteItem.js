import React from "react";

const Vote = ({ name, onShowCart, id }) => {
  return (
    <div className="ml-5 w-[350px]  py-5   shadow border rounded-lg px-5">
      {/* image */}
      <div className="flex justify-center">
        <h1 className="rounded-full font-bold bg-[#005287] pt-10 text-center text-4xl uppercase text-white mx-auto  bg-slime-300  w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110">
          {name[0]}
        </h1>
        {/* candidate name */}
      </div>
      <h1 className="text-center text-3xl py-2">{name}</h1>
      <p className="text-center text-xl">
        Running to be: <strong>President</strong>
      </p>
      <div className="tracking-wildest text-xl py-2 px-3 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque,
        porro itaque aspernatur quam, alias nemo aliquid optio officiis numquam
        voluptatibus voluptas, illo et recusandae sunt. Minima sequi neque
        nesciunt.
      </div>
      <div className="flex flex-row justify-between item-center py-3 mx-auto">
        <span className=" bg-[#005287] border rounded-lg text-white p-3 transition duration-200 transform hover:scale-110">
          <h1>view manifesto</h1>
        </span>

        <button
          className=" bg-[#005281] text-white py-2 px-5 rounded-lg transition duration-200 transform hover:scale-110"
          type="button"
          name="buton"
          id={id}
          // value={id}
          onClick={() => onShowCart(id)}
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default Vote;
