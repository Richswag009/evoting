import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../Store/auth-context";

const Navigation = ({ user }) => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };

  return (
    <ul className="flex flex-row justify-between  align-middle">
      {!isLoggedIn && (
        <li className="bg-[#028f57] text-white px-5 py-2 rounded-lg  mr-3 transition border border-[#005231] ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#fff] hover:text-[#028f57] duration-300  ">
          <Link to="/register">Register</Link>
        </li>
      )}
      {!isLoggedIn && (
        <li className="border text-[#028f57] border-[#028f57] px-5 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to="/login">Login</Link>
        </li>
      )}

      {isLoggedIn && (
        <li className="border text-[#028f57] border-[#028f57] px-5 py-2 mr-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to="/profile">Profile</Link>
        </li>
      )}
      {isLoggedIn && (
        <li className="border text-[#028f57] border-[#028f57] px-5 py-2 mr-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Link to="/dashboard2">Voting</Link>
        </li>
      )}

      {isLoggedIn && (
        <li className="border text-[#028f57] border-[#028f57] px-5 py-2 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <button onClick={logoutHandler}>Logout</button>
        </li>
      )}
    </ul>
  );
};

export default Navigation;
