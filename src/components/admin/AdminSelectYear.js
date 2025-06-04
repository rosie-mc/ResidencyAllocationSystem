import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminSelectYear() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('');

  const handleSubmit = () => {
    if (!selectedYear) {
      alert("Please select a year group.");
      return;
    }
    navigate('/admin/dashboard');
  };

  return (
    <div className="year-container">
      <div className="year-box">
        <h2 className="year-title">Select Year Group</h2>

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

        <button className="year-button" onClick={handleSubmit}>
          Continue to Admin Dashboard
        </button>
      </div>
    </div>
  );
}

export default AdminSelectYear;
