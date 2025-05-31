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
    // You could store selected year globally later if needed
    navigate('/admin/dashboard');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin - Select Year Group</h2>

      <label>Choose year group to access:</label><br/><br/>
      <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Select Year Group</option>
        <option value="1">Year 1</option>
        <option value="2">Year 2</option>
        <option value="3">Year 3</option>
        <option value="4">Year 4</option>
        <option value="5">Year 5</option>
      </select><br/><br/>

      <button onClick={handleSubmit}>Continue to Admin Dashboard</button>
    </div>
  );
}

export default AdminSelectYear;
