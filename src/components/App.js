import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
