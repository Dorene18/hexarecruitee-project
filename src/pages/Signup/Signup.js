
// Signup.js
import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <h1 className="signup-title">
        Sign-up and <strong>apply for free</strong>
      </h1>
      <p className="signup-subtitle">3,00,000+ companies hiring on Internshala</p>

      <div className="signup-box">
        <button className="google-signup-btn">
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="google"
          />
          Sign up with Google
        </button>

        <button className="email-signup-btn">
          <img
            src="https://img.icons8.com/ios-filled/20/000000/email.png"
            alt="email"
          />
          Sign up with Email
        </button>

        <p className="terms-text">
          By signing up, you agree to our{" "}
          <a href="#">Terms and Conditions</a>.
        </p>

        <p className="login-text">
  Already registered?{" "}
  <span className="login-link" onClick={() => navigate("/login")}>
    Login
  </span>
</p>

      </div>
    </div>
  );
}

export default Signup;