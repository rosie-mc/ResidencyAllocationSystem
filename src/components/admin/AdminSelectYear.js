// Import React core library and useState hook for managing component state
import React, { useState } from 'react';
// Import useNavigate hook for programmatic navigation
import { useNavigate } from 'react-router-dom';

// Functional component for Admin Year Group Selection Page
function AdminSelectYear() {
  // useNavigate hook for routing to other pages after selection
  const navigate = useNavigate();

  // State to store which year group is selected from dropdown
  const [selectedYear, setSelectedYear] = useState('');

  // Handles form submission when user clicks "Continue"
  const handleSubmit = () => {
    // Validate that a year group is selected before proceeding
    if (!selectedYear) {
      alert("Please select a year group.");
      return;
    }
    // Navigate to admin dashboard after valid selection
    navigate('/admin/dashboard');
  };

  // JSX layout for year selection page
  return (
    <div className="year-container">
      <div className="year-box">

        {/* Page title */}
        <h2 className="year-title">Select Year Group</h2>

        {/* Dropdown for selecting year group */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="year-select"
        >
          <option value="">Select Year Group</option>
          <option value="1">Year 1</option>
          <option value="2">Year 2</option>
          <option value="3">Year 3</option>
          <option value="4">Year 4</option>
          <option value="5">Year 5</option>
        </select>

        {/* Submit button to proceed to dashboard */}
        <button className="year-button" onClick={handleSubmit}>
          Continue to Admin Dashboard
        </button>

      </div>
    </div>
  );
}

// Export component for routing and reuse
export default AdminSelectYear; 
