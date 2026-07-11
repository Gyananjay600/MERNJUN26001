import React from "react";
import Navbar from "./Navbar";
import Effect from "./Effect";

import "./App.css";
import "./Navbar.css";

function App() {

  function handleClick() {
    localStorage.setItem("isLogin", true);

    // refresh the page
    window.location.reload();
  }

  return (
    <div>

      <Navbar />

      <br />

      <button
        style={{ padding: "8px 20px" }}
        onClick={handleClick}
      >
        Click here to Login
      </button>

      <hr />

      <Effect />

    </div>
  );
}

export default App;