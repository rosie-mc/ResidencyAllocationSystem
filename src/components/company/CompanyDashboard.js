import React, { useState } from 'react';

function CompanyDashboard() {
  //mockdata
  const jobs = [
    {
      jobTitle: 'Intern @ MedTech Solutions',
      applicants: [
       { studentName: 'Alice', cv: 'alice_cv.pdf' },
       { studentName: 'Bob', cv: 'bob_cv.pdf' }
      ]
    }
  ];

  const [interviewScores, setInterviewScores] = useState({});

  const handleScoreChange = (student, score) => {
    setInterviewScores(prev => ({ ...prev, [student]: score }));
  };

  const handleSubmit = () => {
    console.log("Submitted Interview Scores:", interviewScores);
  };

  return (
    <div className="company-container">

      <div className="company-panels">

        {/* LEFT SIDE: Applicants */}
        <div className="company-panel">
          <h3 className="company-title">Applicants by Job</h3>

          {jobs.map((job, idx) => (
            <div key={idx} className="job-card">
              <h4 className="job-title">{job.jobTitle}</h4>
              <table className="company-table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>CV</th>
                  </tr>
                </thead>
                <tbody>
                  {job.applicants.map((applicant, idx2) => (
                    <tr key={idx2}>
                      <td>{applicant.studentName}</td>
                      <td>
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

        {/* RIGHT SIDE: Interview Scoring */}
        <div className="company-panel">
          <h3 className="company-title">Post-Interview Rankings</h3>

          {jobs.flatMap(job => job.applicants).map((applicant, idx) => (
            <div key={idx} className="score-entry">
              <label>{applicant.studentName}:</label>
              <select
                className="score-select"
                onChange={(e) => handleScoreChange(applicant.studentName, e.target.value)}
                defaultValue=""
              >
                <option value="">Score</option>
                {[...Array(11).keys()].map(score => (
                  <option key={score} value={score}>{score}</option>
                ))}
              </select>
            </div>
          ))}

          <button className="company-button" onClick={handleSubmit}>
            Submit Interview Rankings
          </button>
        </div>

      </div>
    </div>
  );
}

export default CompanyDashboard;
