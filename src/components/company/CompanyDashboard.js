import React, { useState } from 'react';

function CompanyDashboard() {
  // MOCK DATA: Replace with backend data later
  const jobs = [
    {
      jobTitle: 'Intern @ Zerv',
      applicants: [
        { studentName: 'Alice', cv: 'alice_cv.pdf' },
        { studentName: 'Bob', cv: 'bob_cv.pdf' }
      ]
    },
  ];

  // Interview score state
  const [interviewScores, setInterviewScores] = useState({});

  const handleScoreChange = (student, score) => {
    setInterviewScores(prev => ({ ...prev, [student]: score }));
  };

  const handleSubmit = () => {
    console.log("Submitted Interview Scores:", interviewScores);
    // Connect this to backend using axios when ready
  };

  return (
    <div style={{ display: 'flex', padding: '20px' }}>

      {/* LEFT SIDE: Applicants Table */}
      <div style={{ width: '50%', borderRight: '1px solid black', paddingRight: '20px' }}>
        <h3>Applicants by Job</h3>

        {jobs.map((job, idx) => (
          <div key={idx} style={{ marginBottom: '20px' }}>
            <h4>{job.jobTitle}</h4>
            <table border="1" cellPadding="5">
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
      <div style={{ width: '50%', paddingLeft: '20px' }}>
        <h3>Post-Interview Ranking</h3>

        {/* Flatten applicants across jobs */}
        {jobs.flatMap(job => job.applicants).map((applicant, idx) => (
          <div key={idx} style={{ marginBottom: '10px' }}>
            <label>{applicant.studentName}: </label>
            <select onChange={(e) => handleScoreChange(applicant.studentName, e.target.value)} defaultValue="">
              <option value="">Score</option>
              {[...Array(11).keys()].map(score => (
                <option key={score} value={score}>{score}</option>
              ))}
            </select>
          </div>
        ))}

        <button onClick={handleSubmit}>Submit Interview Rankings</button>
      </div>
    </div>
  );
}

export default CompanyDashboard;
