// Import React core library and useState hook for managing state
import React, { useState } from 'react';

// Functional component for Company Dashboard page
function CompanyDashboard() {
  // Mock job data
  const jobs = [
    {
      jobTitle: 'Intern @ MedTech Solutions',
      applicants: [
        { studentName: 'Alice', cv: 'alice_cv.pdf' },
        { studentName: 'Bob', cv: 'bob_cv.pdf' }
      ]
    }
  ];

  // State hook to store interview scores assigned to each applicant
  const [interviewScores, setInterviewScores] = useState({});

  // Handler to update interview score for a student when changed in dropdown
  const handleScoreChange = (student, score) => {
    setInterviewScores(prev => ({ ...prev, [student]: score }));
  };

  // Handles submission of interview scores (currently logs to console)
  const handleSubmit = () => {
    console.log("Submitted Interview Scores:", interviewScores);
  };

  // JSX layout returned by the component
  return (
    <div className="company-container">

      <div className="company-panels">

        {/* LEFT SIDE: Applicants per job */}
        <div className="company-panel">
          <h3 className="company-title">Applicants by Job</h3>

          {/* Loop through job postings */}
          {jobs.map((job, idx) => (
            <div key={idx} className="job-card">
              <h4 className="job-title">{job.jobTitle}</h4>
              
              {/* Display applicants in a table format */}
              <table className="company-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>CV</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Loop through each applicant for the job */}
                  {job.applicants.map((applicant, idx2) => (
                    <tr key={idx2}>
                      <td>{applicant.studentName}</td>
                      <td>
                        {/* Link to view applicant CV file */}
                        <a href={`path_to_cvs/${applicant.cv}`} target="_blank" rel="noreferrer">
                          View CV
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Post-interview scoring section */}
        <div className="company-panel">
          <h3 className="company-title">Post-Interview Rankings</h3>

          {/* Flatten job applicants into one list for scoring */}
          {jobs.flatMap(job => job.applicants).map((applicant, idx) => (
            <div key={idx} className="score-entry">
              <label>{applicant.studentName}:</label>
              <select
                className="score-select"
                onChange={(e) => handleScoreChange(applicant.studentName, e.target.value)}
                defaultValue=""
              >
                <option value="">Score</option>
                {/* Score options: 0 to 10 */}
                {[...Array(11).keys()].map(score => (
                  <option key={score} value={score}>{score}</option>
                ))}
              </select>
            </div>
          ))}

          {/* Button to submit interview scores */}
          <button className="company-button" onClick={handleSubmit}>
            Submit Interview Rankings
          </button>
        </div>

      </div>
    </div>
  );
}

// Export component for routing and use in parent components
export default CompanyDashboard;
