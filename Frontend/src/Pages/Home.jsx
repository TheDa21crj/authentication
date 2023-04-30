import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./../store/auth-context";

export default function Home() {
  const authCtx = useContext(AuthContext);

  console.log(authCtx.user);
  return (
    <div>
      Home
      <br />
      <br />
      <br />
      <p>Name = {authCtx.user.name}</p>
      <p>Email = {authCtx.user.email}</p>
    </div>
  );
}
