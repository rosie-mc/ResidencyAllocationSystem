import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CompanyHome() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: '',
    description: '',
    pay: '',
    jobSlots: '',
    interviewSlots: '',
    allocationSystem: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted:", formData);
    // You will add your axios call here to send to backend
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Residency Allocation System - Company Portal</h2>

      {/* System Explanation */}
      <div style={{ marginBottom: '20px' }}>
        <h3>How the System Works:</h3>
        <p>
          Welcome Residency Partners! This system allows you to post job positions, 
          receive student applications, view uploaded CVs, rank applicants post-interview, 
          and participate fairly in the residency allocation algorithm.
        </p>
        <p>
          After posting jobs, students will rank them, upload CVs, and attend interviews. 
          You will then score students, and the matching algorithm will generate final allocations.
        </p>
      </div>

      {/* Help + Dashboard Button */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => navigate('/company/dashboard')}>
          Go To Company Dashboard
        </button>
      </div>

      {/* Job Post Form */}
      <div style={{ border: '1px solid black', padding: '20px' }}>
        <h3>Add Residency Job Post</h3>

        <input name="jobTitle" placeholder="Job Title" onChange={handleChange} /><br /><br />
        <textarea name="description" placeholder="Job Description" rows="4" onChange={handleChange}></textarea><br /><br />
        <input name="pay" placeholder="Pay" onChange={handleChange} /><br /><br />
        <input name="jobSlots" placeholder="Number of Job Slots" onChange={handleChange} /><br /><br />
        <input name="interviewSlots" placeholder="Number of Interview Slots" onChange={handleChange} /><br /><br />

        <label>
          Follow Allocation System: 
          <input name="allocationSystem" type="checkbox" onChange={handleChange} />
        </label><br /><br />

        <button onClick={handleSubmit}>Submit Job Post</button>
      </div>
    </div>
  );
}

export default CompanyHome;
