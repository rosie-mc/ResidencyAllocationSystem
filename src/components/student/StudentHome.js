// Import React core library
import React from 'react';
// Import useNavigate hook from react-router-dom for programmatic navigation between pages
import { useNavigate } from 'react-router-dom';

// Functional component for Student Home Page
function StudentHome() {
  // useNavigate hook allows us to programmatically navigate to different routes
  const navigate = useNavigate();

  // JSX returned by this component, representing the student home page layout
  return (
    <div className="studenthome-container">
      {/* Main content box */}
      <div className="studenthome-box">
        <h2 className="studenthome-title">Student Home</h2>

        {/* Instructional text area explaining the system workflow */}
        <div className="studenthome-text">
          <h3>How the System Works:</h3>
          <p>
          {/* Step-by-step guide for the student on how to use the residency allocation system */}
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

        {/* Buttons for navigation to ranking page and application status page */}
        <div className="studenthome-buttons">
          {/* Navigate to job board and ranking page when button clicked */}
          <button className="studenthome-button" onClick={() => navigate('/student/jobsranking')}>
            View Jobs Board & Submit Rankings
          </button>

          {/* Navigate to application status and CV upload page when button clicked */}
          <button className="studenthome-button" onClick={() => navigate('/student/application')}>
            View Application Status & Upload CV
          </button>
        </div>
      </div>
    </div>
  );
}

// Export component for usage in other parts of app
export default StudentHome;
