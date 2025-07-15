
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./LoginModal.css";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both fields");
      return;
    }

    const nameFromEmail = email.split("@")[0];
    setUsername(nameFromEmail);
    navigate("/welcome");
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={() => navigate(-1)}>×</button>
        
        <h2 className="modal-title">Welcome Back!</h2>
        <p className="modal-subtitle">Login to continue your journey</p>

        <input
          type="email"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <a href="#" className="forgot-password">Forgot password?</a>

        <button className="blue-login-btn" onClick={handleLogin}>Login</button>

        <p className="bottom-register-text">
          New to our platform? <a href="/signup">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default LoginModal;
