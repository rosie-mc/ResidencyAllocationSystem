// Import React core library and useState hook for managing local component state
import React, { useState } from 'react';

// Functional component for Student Application page
function StudentApplication() {
  // Mock data
  const submittedRankings = ['Intern @ MedTech Solutions', 'Developer @ HealthAI', 'Software Engineer @ FinSecure'];

  // Mock data
  const eligibleJobs = [
    { jobTitle: 'Intern @ MedTech Solutions', competitors: ['Alice', 'Bob', 'Charlie'], successfulApplicant: 'TBD' },
    { jobTitle: 'Developer @ HealthAI', competitors: ['David', 'Eve'], successfulApplicant: 'TBD' },
    { jobTitle: 'Software Engineer @ FinSecure', competitors: ['Frank'], successfulApplicant: 'TBD' }
  ];

  // State hook to store uploaded CV files per job title
  const [cvUploads, setCvUploads] = useState({});
  // State hook to store post-interview rankings submitted by student
  const [interviewRankings, setInterviewRankings] = useState({});
  // Mock data for final match result (to be replaced by backend integration)
  const finalMatch = { jobTitle: 'Intern @ MedTech Solutions', status: 'Pending' };

  // Handles uploading CV file
  const handleCvUpload = (jobTitle, file) => {
    setCvUploads(prev => ({ ...prev, [jobTitle]: file.name }));
  };

  // Handles ranking changes for post-interview stage
  const handleInterviewRankingChange = (jobTitle, value) => {
    setInterviewRankings(prev => ({ ...prev, [jobTitle]: value }));
  };

  // Submits interview rankings (currently logs to console for demo purposes)
  const handleSubmitInterviewRankings = () => {
    console.log("Interview Rankings Submitted: ", interviewRankings);
  };

  // Handles accepting the match offer (placeholder for backend integration)
  const handleAcceptMatch = () => {
    console.log("Accepted match");
  };

  // Handles declining the match offer (placeholder for backend integration)
  const handleDeclineMatch = () => {
    console.log("Declined match");
  };

  // JSX layout returned by the component
  return (
    <div className="studentapp-container">
      
      {/* Submitted Rankings panel */}
      <div className="studentapp-panel">
        <h3>Submitted Rankings</h3>
        <ol>
          {submittedRankings.map((rank, idx) => (
            <li key={idx}>{rank}</li>
          ))}
        </ol>
      </div>

      {/* Eligible residencies and CV upload section */}
      <div className="studentapp-panel">
        <h3>Eligible Residencies - Upload CV</h3>
        <table className="studentapp-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Competitors</th>
              <th>CV Upload</th>
              <th>Successful Applicant</th>
            </tr>
          </thead>
          <tbody>
            {eligibleJobs.map((job, idx) => (
              <tr key={idx}>
                <td>{job.jobTitle}</td>
                <td>{job.competitors.join(', ')}</td>
                <td>
                  {/* File input to upload CV file for the specific job */}
                  <input
                    type="file"
                    className="studentapp-file"
                    onChange={(e) => handleCvUpload(job.jobTitle, e.target.files[0])}
                  />
                  {/* Display uploaded file name if available */}
                  {cvUploads[job.jobTitle] && <p>Uploaded: {cvUploads[job.jobTitle]}</p>}
                </td>
                <td>{job.successfulApplicant}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Split layout for interview ranking and final match display */}
        <div className="studentapp-split">

          {/* Post-interview ranking submission panel */}
          <div className="studentapp-left">
            <h3>Post-Interview Ranking</h3>
            {submittedRankings.map((jobTitle, idx) => (
              <div key={idx} className="studentapp-score">
                <label>{jobTitle}: </label>
                <select
                  className="studentapp-select"
                  value={interviewRankings[jobTitle] || ""}
                  onChange={(e) => handleInterviewRankingChange(jobTitle, e.target.value)}
                >
                  <option value="">Select Rank</option>
                  {submittedRankings.map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </div>
            ))}
            {/* Submit button for interview rankings */}
            <button className="studentapp-button" onClick={handleSubmitInterviewRankings}>
              Submit Rankings
            </button>
          </div>

          {/* Final match offer display panel */}
          <div className="studentapp-right">
            <h3>Final Residency Match</h3>
            <p>Matched Residency: <strong>{finalMatch.jobTitle}</strong></p>
            <p>Status: <strong>{finalMatch.status}</strong></p>
            {/* Accept/Decline buttons */}
            <button className="studentapp-button" onClick={handleAcceptMatch}>Accept</button>
            <button className="studentapp-button-light" onClick={handleDeclineMatch}>Decline</button>
          </div>

        </div>
      </div>
    </div>
  );
}

// Export component for routing and use in parent components
export default StudentApplication;
