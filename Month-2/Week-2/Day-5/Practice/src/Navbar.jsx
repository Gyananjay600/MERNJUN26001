import React from "react";
import "./Navbar.css";

function Navbar() {

  const isLogin =
    JSON.parse(localStorage.getItem("isLogin")) || false;

  return (
    <div className="nav-container">

      <div>Nav Logo</div>

      <button className="btn">
        {isLogin ? "Profile" : "Login"}
      </button>

    </div>
  );
}

export default Navbar;