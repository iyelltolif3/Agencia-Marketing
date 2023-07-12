import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  <Router>
    <Routes>
      <Route path="*" element={<Error404/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>;
}

export default App;
