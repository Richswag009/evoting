import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  loadUser: () => {},
  error: false,
  alert: null,
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(initialToken);
  // const [user, setUser] = useState([]);

  const userIsLoggedIn = !!token;

  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem("isLoggedIn");

  //   if (storedUserInfo === 1) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const userIsLoggedIn = !!isLoggedIn;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    // loadUserHandler();
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
    // removeUserSession();
  };
  // const loadUserHandler = async () => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  //   try {
  //     const res = await axios.get(baseUrl() + "users");
  //     setUser(res.data);
  //   } catch (error) {}
  // };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
