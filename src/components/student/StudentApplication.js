import React, { useState } from 'react';

function StudentApplication() {
  // Mock Data:
  const submittedRankings = ['Intern @ Zerv', 'Full stack dev @ totalcare', 'attendie @ patch'];

  const eligibleJobs = [
    { jobTitle: 'Intern @ Zerv', competitors: ['Alice', 'Bob', 'Charlie'], successfulApplicant: 'TBD' },
    { jobTitle: 'Full stack dev @ totalcare', competitors: ['David', 'Eve'], successfulApplicant: 'TBD' },
    { jobTitle: 'attendie @ patch', competitors: ['Frank'], successfulApplicant: 'TBD' }
  ];

  const [cvUploads, setCvUploads] = useState({});
  const [interviewRankings, setInterviewRankings] = useState({});
  const finalMatch = { jobTitle: 'Intern @ Zerv', status: 'Pending' };

  const handleCvUpload = (jobTitle, file) => {
    setCvUploads(prev => ({ ...prev, [jobTitle]: file.name }));
  };

  const handleInterviewRankingChange = (jobTitle, value) => {
    setInterviewRankings(prev => ({ ...prev, [jobTitle]: value }));
  };

  const handleSubmitInterviewRankings = () => {
    console.log("Interview Rankings Submitted: ", interviewRankings);
    // axios call here later
  };

  const handleAcceptMatch = () => {
    console.log("Accepted match");
    // axios call here later
  };

  const handleDeclineMatch = () => {
    console.log("Declined match");
    // axios call here later
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      
      {/* Left side: Submitted Rankings */}
      <div style={{ width: '40%', borderRight: '1px solid black', paddingRight: '20px' }}>
        <h3>Submitted Rankings</h3>
        <ol>
          {submittedRankings.map((rank, idx) => (
            <li key={idx}>{rank}</li>
          ))}
        </ol>
      </div>

      {/* Right side */}
      <div style={{ width: '60%', paddingLeft: '20px' }}>

        {/* Top Right: Eligible CV Upload */}
        <div style={{ marginBottom: '40px' }}>
          <h3>Eligible Residencies - Upload CV</h3>
          <table border="1" cellPadding="5">
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
                    <input type="file" onChange={(e) => handleCvUpload(job.jobTitle, e.target.files[0])} />
                    {cvUploads[job.jobTitle] && <p>Uploaded: {cvUploads[job.jobTitle]}</p>}
                  </td>
                  <td>{job.successfulApplicant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Right: Post-Interview Ranking + Final Match */}
        <div style={{ display: 'flex' }}>
          
          {/* Post Interview Ranking */}
          <div style={{ width: '50%', paddingRight: '10px' }}>
            <h3>Post-Interview Ranking</h3>
            {submittedRankings.map((jobTitle, idx) => (
              <div key={idx} style={{ marginBottom: '10px' }}>
                <label>{jobTitle}: </label>
                <select
                  value={interviewRankings[jobTitle] || ""}
                  onChange={(e) => handleInterviewRankingChange(jobTitle, e.target.value)}
                >
                  <option value="">Select Rank</option>
                  {submittedRankings.map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </div>
            ))}
            <button onClick={handleSubmitInterviewRankings}>Submit Rankings</button>
          </div>

          {/* Final Match */}
          <div style={{ width: '50%', paddingLeft: '10px' }}>
            <h3>Final Residency Match</h3>
            <p>Matched Residency: <strong>{finalMatch.jobTitle}</strong></p>
            <p>Status: <strong>{finalMatch.status}</strong></p>
            <button onClick={handleAcceptMatch} style={{ marginRight: '10px' }}>Accept</button>
            <button onClick={handleDeclineMatch}>Decline</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default StudentApplication;
