import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className=" flex flex-row justify-between border-b-4 bg-white px-10 py-7 shadow-lg  mb-0">
      <h1 className="text-2xl font-normal">
        {" "}
        <Link to="/">
          {" "}
          <strong className="text-lime-800 ">9ja's</strong>
          Vote{" "}
        </Link>
      </h1>

      <Navigation user={user} />
    </nav>
  );
};

export default Navbar;
