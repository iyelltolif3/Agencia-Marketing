import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "redux/store";
import { Provider } from "react-redux";


function App() {
  <Provider store = {store}>
    <Router>
      <Routes>
        <Route path="*" element={<Error404/>} />
        <Route path="/" element={<Home/>} />
      </Routes> 
    </Router>;
  </Provider>
}

export default App;
