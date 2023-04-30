import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./../store/auth-context";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();

  const logout = () => {
    redirect("/Login");
    authCtx.logout();
  };
  return (
    <div>
      Home
      <br />
      <br />
      <br />
      <p>Name = {authCtx.user.name}</p>
      <p>Email = {authCtx.user.email}</p>
      <br />
      <br />
      <p onClick={logout}>Logout</p>
    </div>
  );
}
