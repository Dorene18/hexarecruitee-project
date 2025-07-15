import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedJob = data.find((j) => String(j.id) === id);
        setJob(selectedJob);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleApply = () => {
    const applied = JSON.parse(localStorage.getItem('applications')) || [];
    const alreadyApplied = applied.some((j) => j.id === job.id);
    if (!alreadyApplied) {
      applied.push({
        id: job.id,
        company: job.company,
        profile: job.title,
        appliedOn: new Date().toLocaleDateString(),
        status: "Pending"
      });
      localStorage.setItem('applications', JSON.stringify(applied));
      alert("Application submitted successfully!");
      navigate("/my-applications");
    } else {
      alert("You already applied for this job.");
    }
  };

  if (!job) return <div className="job-container">Job not found</div>;

  return (
    <div className="job-container">
      <h1>{job.title} ({job.jobType})</h1>
      <div className="job-info">
        <span><strong>Company:</strong> {job.company}</span>
        <span><strong>Location:</strong> {job.location}</span>
        <span><strong>CTC:</strong> ₹{job.salary} LPA</span>
        <span><strong>Experience:</strong> {job.experience} years</span>
        <span><strong>Posted:</strong> {job.posted} ago</span>
        {job.active && <span className="badge">Actively Hiring</span>}
      </div>

      <section>
        <h2>About the Job</h2>
        <p>This is a great opportunity to grow your skills.</p>
      </section>

      <section>
        <h2>Skills Required</h2>
        <div className="skills">
          <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span>
        </div>
      </section>

      <button className="apply-btn" onClick={handleApply}>Apply now</button>
      <div className="footer">{job.company} is actively hiring on our platform.</div>
    </div>
  );
};

export default JobDetails;
