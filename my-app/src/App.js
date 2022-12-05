import React from "react";
import "./App.css";
import { signInWithGoogle } from "./firebase-config";

function App() {
  return (
    <div className="info">
      <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>

      <br />
      <br />

      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img
        src={localStorage.getItem("profilePic")}
        alt={localStorage.getItem("profilePic")}
        height="100px"
        width="100px"
      />
    </div>
  );
}

export default App;
