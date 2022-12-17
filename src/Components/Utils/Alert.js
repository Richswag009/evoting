import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div
        className={`  px-3 py-4 text-center text-xl text-white ${alert.type}`}
      >
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
