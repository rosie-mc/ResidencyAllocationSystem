import React from 'react';
import { useNavigate } from 'react-router-dom';

function StudentHome() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Residency Allocation System - Student Home</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>How the System Works:</h3>
        <p>
          Welcome! This system allows you to browse available residency positions, submit your job rankings,
          upload your CV to companies you're eligible to interview with, submit interview rankings, and view your final match.
          <br/><br/>
          The process is designed to ensure fairness based on your preferences, academic scores, and interview results.
        </p>
      </div>

      <div>
        <button onClick={() => navigate('/student/jobsranking')} style={{ margin: '10px' }}>
          View Jobs Board & Submit Rankings
        </button>

        <button onClick={() => navigate('/student/application')} style={{ margin: '10px' }}>
          View Application Status & Upload CV
        </button>
      </div>
    </div>
  );
}

export default StudentHome;
