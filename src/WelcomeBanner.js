import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';
import "./WelcomeBanner.css"

function DashboardHome() {
  const { username } = useContext(UserContext);

  return (
    <div className="dashboard-home">
      <h1>Hi, {username || "Guest"} 👋</h1>
      <h3>Welcome to your Dashboard</h3>
    </div>
  );
}

export default DashboardHome;
