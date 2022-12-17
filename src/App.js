import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn";
import SignUp from "./Components/Pages/SignUp";
import Profile from "./Components/Pages/Profile";
import Dashboard2 from "./Components/Dashboard/Dashboard2";
import Dashboard from "./Components/Pages/Dashboard";
// import Sidebar from "./Components/Sidebar/Sidebar";
import { useContext } from "react";
import AuthContext from "./Store/auth-context";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const [user, setUser] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const getUsers = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/user",
        config
      );
      const data = response.data;
      if (!response.status) {
        throw new Error("something went wrong");
      }
      setUser(data);
    };

    getUsers();
  }, []);

  return (
    <div className=" ">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<Home user={user} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {isLoggedIn && (
              <Route path="/profile" element={<Profile user={user} />} />
            )}
            {isLoggedIn && (
              <Route path="/dashboard2" element={<Dashboard2 user={user} />} />
            )}
          </Routes>
          {/* {isLoggedIn && (
            <Sidebar>
            <Routes>
            <Route path="/dashboard/home" element={<Dashboard />} />
                <Route path="/dashboard/profile" element={<Profile />} />
                <Route path="/dashboard/election" element={<Election />} />
              </Routes>
            </Sidebar>
          )} */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
