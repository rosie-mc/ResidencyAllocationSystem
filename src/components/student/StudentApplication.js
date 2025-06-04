import React, { useState } from 'react';

function StudentApplication() {
  const submittedRankings = ['Intern @ MedTech Solutions', 'Developer @ HealthAI', 'Software Engineer @ FinSecure'];

  const eligibleJobs = [
    { jobTitle: 'Intern @ MedTech Solutions', competitors: ['Alice', 'Bob', 'Charlie'], successfulApplicant: 'TBD' },
    { jobTitle: 'Developer @ HealthAI', competitors: ['David', 'Eve'], successfulApplicant: 'TBD' },
    { jobTitle: 'Software Engineer @ FinSecure', competitors: ['Frank'], successfulApplicant: 'TBD' }
  ];

  const [cvUploads, setCvUploads] = useState({});
  const [interviewRankings, setInterviewRankings] = useState({});
  const finalMatch = { jobTitle: 'Intern @ MedTech Solutions', status: 'Pending' };

  const handleCvUpload = (jobTitle, file) => {
    setCvUploads(prev => ({ ...prev, [jobTitle]: file.name }));
  };

  const handleInterviewRankingChange = (jobTitle, value) => {
    setInterviewRankings(prev => ({ ...prev, [jobTitle]: value }));
  };

  const handleSubmitInterviewRankings = () => {
    console.log("Interview Rankings Submitted: ", interviewRankings);
  };

  const handleAcceptMatch = () => {
    console.log("Accepted match");
  };

  const handleDeclineMatch = () => {
    console.log("Declined match");
  };

  return (
    <div className="studentapp-container">

      <div className="studentapp-panel">
        <h3>Submitted Rankings</h3>
        <ol>
          {submittedRankings.map((rank, idx) => (
            <li key={idx}>{rank}</li>
          ))}
        </ol>
      </div>

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
                  <input
                    type="file"
                    className="studentapp-file"
                    onChange={(e) => handleCvUpload(job.jobTitle, e.target.files[0])}
                  />
                  {cvUploads[job.jobTitle] && <p>Uploaded: {cvUploads[job.jobTitle]}</p>}
                </td>
                <td>{job.successfulApplicant}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="studentapp-split">
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
            <button className="studentapp-button" onClick={handleSubmitInterviewRankings}>
              Submit Rankings
            </button>
          </div>

          <div className="studentapp-right">
            <h3>Final Residency Match</h3>
            <p>Matched Residency: <strong>{finalMatch.jobTitle}</strong></p>
            <p>Status: <strong>{finalMatch.status}</strong></p>
            <button className="studentapp-button" onClick={handleAcceptMatch}>Accept</button>
            <button className="studentapp-button-light" onClick={handleDeclineMatch}>Decline</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default StudentApplication;
