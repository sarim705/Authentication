// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./mycomponent/login";
import Signup from "./mycomponent/signup";
import "./style.css"; // Import CSS file for styling

function App() {
  return (
    <Router>
      <div className="container">
        <h1>WELCOME TO SARIM GITHUB</h1>
      </div>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
