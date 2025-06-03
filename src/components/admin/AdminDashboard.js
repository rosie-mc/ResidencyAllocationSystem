import React, { useState } from 'react';

function AdminDashboard() {
  const systemStats = {
    totalStudents: 100,
    totalCompanies: 10,
    activeJobs: 25,
    studentPreferencesSubmitted: 80,
    companyPreferencesSubmitted: 8,
    currentRound: 1
  };

  const students = [
    { name: 'Alice', rankings: 'Intern @ Zerv > Full stack dev @ totalcare > attendie @ patch', cv: 'alice_cv.pdf' },
    { name: 'Bob', rankings: 'Full stack dev @ totalcare > Intern @ Zerv > attendie @ patch', cv: 'bob_cv.pdf' }
  ];

  const companies = [
    { jobTitle: 'Intern @ Zerv', description: 'isebaddie for money.', pay: '£30,000', jobSlots: 3, interviewSlots: 5, followingSystem: true },
    { jobTitle: 'Full stack dev @ totalcare', description: 'skincare diva X.', pay: '£28,000', jobSlots: 2, interviewSlots: 4, followingSystem: false },
    { jobTitle: 'attendie @ patch', description: 'software engineering hot gal summa', pay: '£29,000', jobSlots: 4, interviewSlots: 3, followingSystem: true }
  ];

  const [forms, setForms] = useState({
    preInterviewOpen: false,
    postInterviewOpen: false,
    companyJobOpen: false,
    companyPostInterviewOpen: false
  });

  const handleToggle = (formName) => {
    setForms(prev => ({ ...prev, [formName]: !prev[formName] }));
  };

  return (
    <div className="admin-container">

      <div className="stats-box">
        <h2>System Statistics</h2>
        <p>Total Students Registered: {systemStats.totalStudents}</p>
        <p>Total Companies Registered: {systemStats.totalCompanies}</p>
        <p>Active Job Positions: {systemStats.activeJobs}</p>
        <p>Student Preferences Submitted: {systemStats.studentPreferencesSubmitted}</p>
        <p>Company Preferences Submitted: {systemStats.companyPreferencesSubmitted}</p>
        <p>Current Round: {systemStats.currentRound}</p>
      </div>

      <div className="admin-panels">
        {/* Students Panel */}
        <div className="admin-panel">
          <h3>Registered Students</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rankings</th>
                <th>CV</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx}>
                  <td>{student.name}</td>
                  <td>{student.rankings}</td>
                  <td><a href={`path_to_cvs/${student.cv}`} target="_blank" rel="noreferrer">View CV</a></td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="section-subtitle">Student Forms</h4>
          <button className="toggle-button" onClick={() => handleToggle('preInterviewOpen')}>
            {forms.preInterviewOpen ? 'Close' : 'Open'} Pre-Interview Rankings
          </button>
          <button className="toggle-button" onClick={() => handleToggle('postInterviewOpen')}>
            {forms.postInterviewOpen ? 'Close' : 'Open'} Post-Interview Rankings
          </button>
        </div>

        {/* Companies Panel */}
        <div className="admin-panel">
          <h3>Registered Companies</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Description</th>
                <th>Pay</th>
                <th>Slots</th>
                <th>Interviews</th>
                <th>Following System</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, idx) => (
                <tr key={idx}>
                  <td>{company.jobTitle}</td>
                  <td>{company.description}</td>
                  <td>{company.pay}</td>
                  <td>{company.jobSlots}</td>
                  <td>{company.interviewSlots}</td>
                  <td>{company.followingSystem ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="section-subtitle">Company Forms</h4>
          <button className="toggle-button" onClick={() => handleToggle('companyJobOpen')}>
            {forms.companyJobOpen ? 'Close' : 'Open'} Job Applications
          </button>
          <button className="toggle-button" onClick={() => handleToggle('companyPostInterviewOpen')}>
            {forms.companyPostInterviewOpen ? 'Close' : 'Open'} Post-Interview Rankings
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
