// Import React core library and useState hook for state management
import React, { useState } from 'react';
// Import useNavigate hook for programmatic route navigation
import { useNavigate } from 'react-router-dom';

// Functional component for Company Home page
function CompanyHome() {
  // useNavigate hook to navigate between pages in the app
  const navigate = useNavigate();

  // React state to store form data for new job post creation
  const [formData, setFormData] = useState({
    jobTitle: '',          
    description: '',       
    pay: '',               
    jobSlots: '',          
    interviewSlots: '',    
    allocationSystem: false 
  });

  // Handles changes to form inputs (including checkbox logic)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Submits form data (currently only logs it to console)
  const handleSubmit = () => {
    console.log("Submitted:", formData);
  };

  // JSX layout of the Company Home page UI
  return (
    <div className="companyhome-container">
      <div className="companyhome-box">

        {/* Main heading for Company Portal */}
        <h2 className="companyhome-title">Company Portal</h2>

        {/* Instructions on how the system works for residency partners */}
        <div className="companyhome-description">
          <h3>How the System Works:</h3>
          <p>
          Welcome Residency Partners! This system allows you to post job positions and match with students using the Gale-Shapley matching algorithm.
          <br/><br/>
          To begin, fill out the form below to create a new job post. Please ensure the company name is included in the job title e.g. Intern @ Company Name. You must select whether your posting will participate in the allocation system; if this option is not selected, you will be responsible for offering positions independently, outside of the Gale-Shapley process.
          <br/><br/>
          Once your job post is submitted, you will receive a list of applicants along with their CVs. You may choose which students to invite for interviews or decline applicants directly. Please note that all interview scheduling and coordination must be arranged directly with students.
          <br/><br/>
          After interviews are completed, you will assign each interviewed student a score from 0 to 10, with 10 indicating the strongest candidate. These scores are then used to automatically generate your ranked list of applicants, which is submitted into the Gale-Shapley matching algorithm.
          <br/><br/>
          Once the matching process is complete, students will be notified of their match. Upon student acceptance, you will be informed of your assigned candidate. If any positions remain unfilled, the process may repeat in later rounds until all available roles are matched.
          </p>
        </div>

        {/* Navigation button to Company Dashboard */}
        <button className="companyhome-button-light" onClick={() => navigate('/company/dashboard')}>
          Go To Company Dashboard
        </button>

        {/* Section header for adding a new job post */}
        <h3 className="companyhome-subtitle">Add Residency Job Post</h3>

        {/* Input fields for job post details */}
        <input 
          name="jobTitle" 
          placeholder="Job Title" 
          className="companyhome-input" 
          onChange={handleChange} 
        />
        <textarea 
          name="description" 
          placeholder="Job Description" 
          className="companyhome-textarea" 
          rows="4" 
          onChange={handleChange}
        ></textarea>
        <input 
          name="pay" 
          placeholder="Pay" 
          className="companyhome-input" 
          onChange={handleChange} 
        />
        <input 
          name="jobSlots" 
          placeholder="Number of Job Slots" 
          className="companyhome-input" 
          onChange={handleChange} 
        />
        <input 
          name="interviewSlots" 
          placeholder="Number of Interview Slots" 
          className="companyhome-input" 
          onChange={handleChange} 
        />

        {/* Checkbox for selecting allocation system participation */}
        <div className="companyhome-checkbox">
          <label>
            Follow Allocation System: 
            <input 
              name="allocationSystem" 
              type="checkbox" 
              onChange={handleChange} 
            />
          </label>
        </div>

        {/* Submit button for posting job */}
        <button className="companyhome-button" onClick={handleSubmit}>
          Submit Job Post
        </button>

      </div>
    </div>
  );
}

// Export component for use in routing system
export default CompanyHome;
