import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// axios
import axios from "axios";

// Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// defaults baseURL
axios.defaults.baseURL = "http://localhost:5000/";

import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {authCtx.isLoggedIn && <Route path="/" element={<Home />} />}
        {!authCtx.isLoggedIn && (
          <Route path="/Register" element={<Register />} />
        )}
        {!authCtx.isLoggedIn && <Route path="/Login" element={<Login />} />}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
