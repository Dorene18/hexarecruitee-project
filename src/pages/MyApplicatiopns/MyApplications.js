import React, { useEffect, useState } from 'react';
import './MyApplications.css';
import { useNavigate } from 'react-router-dom';

const MyApplications = () => {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(data);
  }, []);

  return (
    <div className="applications-container">
      <h2>My Applications</h2>
      {applications.length === 0 ? (
        <div className="empty-state">
          <img src="/empty-folder-icon.png" alt="No Applications" style={{ width: '120px' }} />
          <p><strong>You don't have any applications yet.</strong></p>
          <p>Start applying to boost your career with top hiring companies.</p>
          <button className="browse-btn" onClick={() => navigate('/')}>Browse Jobs</button>
        </div>
      ) : (
        <table className="applications-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Profile</th>
              <th>Applied On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.company}</td>
                <td>{app.profile}</td>
                <td>{app.appliedOn}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyApplications;
