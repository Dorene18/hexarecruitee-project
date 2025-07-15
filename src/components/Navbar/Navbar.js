import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const handleNavigate = (path) => {
    navigate(path);
    setShowDropdown(false); // Close dropdown after click
  };

  return (
    <nav className="navbar">
      <Link to="/welcome" className="logo">
        <h2>HexaRecruitee</h2>
      </Link>

      <div className="nav-links">
        <Link to="/welcome">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        
        <Link to="/messaging">Messaging</Link>
        <Link to="/signup">Sign Up</Link>


        {/* Profile Dropdown */}
        <div className="profile-dropdown">
          <span className="profile-label" onClick={toggleDropdown}>Profile ⌄</span>
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={() => handleNavigate("/applications")}>📄 My Applications</button>
              <button onClick={() => handleNavigate("/welcome")}>🏠 Home</button>
              <button onClick={() => alert("Resume upload coming soon!")}>📎 Edit Resume</button>
              <button onClick={() => handleNavigate("/safety-tips")}>🔒 Safety Tips</button>
            </div>
          )}
        </div>

        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
