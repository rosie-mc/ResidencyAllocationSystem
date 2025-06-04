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
          Welcome to the Residency Allocation System! This system fairly matches you with residency positions based on your preferences and performance.
          <br/><br/>
          You will start by visiting the "View Jobs Board & Submit Rankings" page to explore available residencies. Click on jobs for details, then add them to your Like or Dislike lists. Reorder them based on preference - 1 being favourite, 2 being 2nd favourite, etc. Click 'View Full Ranking' to merge lists. You must rank every job position.
          <br/><br/>
          Based on your average grade, you will then receive a list of positions you are eligible to apply for, with higher-performing students prioritised for top choices.
          <br/><br/>
          Next, submit your CV and monitor your application status on the "View Application Status & Upload CV" page. After interviews, residency partners will score you from 0 – 10 - you will not see these scores. You will also submit your own post-interview rankings.
          <br/><br/>
          The Gale-Shapley algorithm combines your rankings and company scores to generate matches. If unmatched, you may re-enter later rounds until all slots are filled.
          <br/><br/>
          Once offered a residency, you must accept unless you have secured one outside the system. If unsure, contact your residency coordinator. You may edit and resubmit rankings anytime before the submission window closes; after that, forms are locked.
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

