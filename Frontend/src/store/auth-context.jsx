import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  user: {
    name: "",
    pic: "",
    email: "",
  },
  target: null,
  login: async (token) => {},
  logout: () => {},
  settarget: () => {},
});

export default AuthContext;
