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
  };

  return (
    <div className="companyhome-container">
      <div className="companyhome-box">

        <h2 className="companyhome-title">Company Portal</h2>

        <div className="companyhome-description">
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

        <button className="companyhome-button-light" onClick={() => navigate('/company/dashboard')}>
          Go To Company Dashboard
        </button>

        <h3 className="companyhome-subtitle">Add Residency Job Post</h3>

        <input name="jobTitle" placeholder="Job Title" className="companyhome-input" onChange={handleChange} />
        <textarea name="description" placeholder="Job Description" className="companyhome-textarea" rows="4" onChange={handleChange}></textarea>
        <input name="pay" placeholder="Pay" className="companyhome-input" onChange={handleChange} />
        <input name="jobSlots" placeholder="Number of Job Slots" className="companyhome-input" onChange={handleChange} />
        <input name="interviewSlots" placeholder="Number of Interview Slots" className="companyhome-input" onChange={handleChange} />

        <div className="companyhome-checkbox">
          <label>
            Follow Allocation System: 
            <input name="allocationSystem" type="checkbox" onChange={handleChange} />
          </label>
        </div>

        <button className="companyhome-button" onClick={handleSubmit}>Submit Job Post</button>

      </div>
    </div>
  );
}

export default CompanyHome;
