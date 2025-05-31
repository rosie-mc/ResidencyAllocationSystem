import React, { useState } from 'react';

function AdminDashboard() {
  // MOCK DATA: gonna replace with real backend data later
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


  // Open/Close state for all forms
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
    <div style={{ padding: '20px' }}>

      {/* System Stats */}
      <div style={{ border: '1px solid black', padding: '10px', marginBottom: '20px' }}>
        <h2>System Statistics</h2>
        <p>Total Students Registered: {systemStats.totalStudents}</p>
        <p>Total Companies Registered: {systemStats.totalCompanies}</p>
        <p>Active Job Positions: {systemStats.activeJobs}</p>
        <p>Student Preferences Submitted: {systemStats.studentPreferencesSubmitted}</p>
        <p>Company Preferences Submitted: {systemStats.companyPreferencesSubmitted}</p>
        <p>Current Round: {systemStats.currentRound}</p>
      </div>

      {/* Main Split Layout */}
      <div style={{ display: 'flex' }}>

        {/* LEFT: Students */}
        <div style={{ width: '50%', paddingRight: '20px', borderRight: '1px solid black' }}>
          <h3>Registered Students</h3>
          <table border="1" cellPadding="5">
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
                  <td>
                    <a href={`path_to_cvs/${student.cv}`} target="_blank" rel="noreferrer">View CV</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Student Open/Close Forms */}
          <div style={{ marginTop: '20px' }}>
            <h4>Student Forms</h4>
            <button onClick={() => handleToggle('preInterviewOpen')}>
              {forms.preInterviewOpen ? 'Close' : 'Open'} Pre-Interview Rankings
            </button>
            <br /><br />
            <button onClick={() => handleToggle('postInterviewOpen')}>
              {forms.postInterviewOpen ? 'Close' : 'Open'} Post-Interview Rankings
            </button>
          </div>
        </div>

        {/* RIGHT: Companies */}
        <div style={{ width: '50%', paddingLeft: '20px' }}>
          <h3>Registered Companies</h3>
          <table border="1" cellPadding="5">
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

          {/* Company Open/Close Forms */}
          <div style={{ marginTop: '20px' }}>
            <h4>Company Forms</h4>
            <button onClick={() => handleToggle('companyJobOpen')}>
              {forms.companyJobOpen ? 'Close' : 'Open'} Job Applications
            </button>
            <br /><br />
            <button onClick={() => handleToggle('companyPostInterviewOpen')}>
              {forms.companyPostInterviewOpen ? 'Close' : 'Open'} Post-Interview Rankings
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
