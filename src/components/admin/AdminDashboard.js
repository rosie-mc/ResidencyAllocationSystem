// Import React core library and useState hook for state management
import React, { useState } from 'react';

// Functional component for Admin Dashboard page
function AdminDashboard() {
  // Mock data for overall system statistics (normally fetched from backend)
  const systemStats = {
    totalStudents: 100,
    totalCompanies: 10,
    activeJobs: 25,
    studentPreferencesSubmitted: 80,
    companyPreferencesSubmitted: 8,
    currentRound: 1
  };

  // Mock data: list of registered students with their submitted rankings
  const students = [
    { name: 'Alice', rankings: 'Intern @ MedTech Solutions > Developer @ HealthAI > Software Engineer @ FinSecure', cv: 'alice_cv.pdf' },
    { name: 'Bob', rankings: 'Developer @ HealthAI > Software Engineer @ FinSecure > Intern @ MedTech Solutions', cv: 'bob_cv.pdf' }
  ];

  // Mock data: list of registered companies and their job postings
  const companies = [
    { jobTitle: 'Intern @ MedTech Solutions', description: 'Work on medical software systems.', pay: '£2000', jobSlots: 3, interviewSlots: 5, followingSystem: true },
    { jobTitle: 'Developer @ HealthAI', description: 'Focus on healthcare analytics.', pay: '£2200', jobSlots: 2, interviewSlots: 4, followingSystem: false },
    { jobTitle: 'Software Engineer @ FinSecure', description: 'Develop backend financial systems.', pay: '£2100', jobSlots: 4, interviewSlots: 3, followingSystem: true }
  ];

  // State to manage toggle states of admin forms (open/close various ranking forms)
  const [forms, setForms] = useState({
    preInterviewOpen: false,
    postInterviewOpen: false,
    companyJobOpen: false,
    companyPostInterviewOpen: false
  });

  // Function to toggle form states
  const handleToggle = (formName) => {
    setForms(prev => ({ ...prev, [formName]: !prev[formName] }));
  };

  // JSX layout of Admin Dashboard page
  return (
    <div className="admin-container">

      {/* System Statistics Panel */}
      <div className="stats-box">
        <h2>System Statistics</h2>
        <p>Total Students Registered: {systemStats.totalStudents}</p>
        <p>Total Companies Registered: {systemStats.totalCompanies}</p>
        <p>Active Job Positions: {systemStats.activeJobs}</p>
        <p>Student Preferences Submitted: {systemStats.studentPreferencesSubmitted}</p>
        <p>Company Preferences Submitted: {systemStats.companyPreferencesSubmitted}</p>
        <p>Current Round: {systemStats.currentRound}</p>
      </div>

      {/* Admin Panels for Students and Companies */}
      <div className="admin-panels">

        {/* Students Panel */}
        <div className="admin-panel">
          <h3>Registered Students</h3>

          {/* Table showing registered students and rankings */}
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rankings</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx}>
                  <td>{student.name}</td>
                  <td>{student.rankings}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Buttons for opening/closing student forms */}
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

          {/* Table showing registered companies and job posts */}
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

          {/* Buttons for opening/closing company forms */}
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

// Export component for use in routing system
export default AdminDashboard;
