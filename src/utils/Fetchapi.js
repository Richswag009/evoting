export const config = {
  // Content-Type:'application/json',
  headers: {
    Authorization: "Bearer" + localStorage.getItem("token"),
  },
  //   withCredentials: true,
};

export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("tokenX");
  localStorage.removeItem("list");
  localStorage.removeItem("usersList");
};

export const baseUrl = () => {
  return "http://localhost:8000/api/";
};
export const setUsersList = (list) => {
  localStorage.setItem("usersList", JSON.stringify(list));
};

export const setList = (listn) => {
  localStorage.setItem("list", JSON.stringify(listn));
};

export const setSmList = (listx) => {
  localStorage.setItem("setsubmoduleList", JSON.stringify(listx));
};

/*  export const removeUsersList = () => {
        localStorage.removeItem("usersList");
        } */
export const getUsersList = () => {
  const listDataxn = localStorage.getItem("usersList");
  if (listDataxn) return JSON.parse(listDataxn);
  else return null;
};

// const loadUser = async () => {
//   // load token into global
// };
