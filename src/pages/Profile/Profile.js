import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Profile.css";

const Profile = () => {
  const { username } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <p><strong>Username:</strong> {username || "Guest"}</p>

      <div className="profile-options">
        <button onClick={() => navigate("/applications")}>📄 My Applications</button>
        <button onClick={() => navigate("/welcome")}>🏠 Home</button>
        
        <button onClick={() => alert("Resume upload coming soon!")}>📎 Edit Resume</button>
        <button onClick={() => navigate("/safety-tips")}>🔒 Safety Tips</button>
        

      </div>
    </div>
  );
};

export default Profile;
