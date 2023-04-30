import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// axios
import axios from "axios";

// Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// defaults baseURL
axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
