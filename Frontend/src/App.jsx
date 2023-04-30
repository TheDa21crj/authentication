import axios from "axios";

// Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";

// defaults baseURL
axios.defaults.baseURL = "http://localhost:5000/";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
