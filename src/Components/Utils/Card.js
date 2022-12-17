import React from "react";

const Card = (props) => {
  return (
    <div className="w-[70vh] px-5 py-8 drop-shadow-lg border shadow-lg min-w-min ">
      {props.children}
    </div>
  );
};

export default Card;
