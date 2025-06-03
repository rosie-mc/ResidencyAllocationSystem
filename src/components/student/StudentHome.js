import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentHome() {
  const navigate = useNavigate();

  return (
    <div className="studenthome-container">
      <div className="studenthome-box">
        <h2 className="studenthome-title">Student Home</h2>

        <div className="studenthome-text">
          <h3>How the System Works:</h3>
          <p>
            Welcome! This system allows you to browse available residency positions, submit your job rankings,
            upload your CV to companies you're eligible to interview with, submit interview rankings, and view your final match.
            <br/><br/>
            The process is designed to ensure fairness based on your preferences, academic scores, and interview results.
          </p>
        </div>

        <div className="studenthome-buttons">
          <button className="studenthome-button" onClick={() => navigate('/student/jobsranking')}>
            View Jobs Board & Submit Rankings
          </button>

          <button className="studenthome-button" onClick={() => navigate('/student/application')}>
            View Application Status & Upload CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentHome;

