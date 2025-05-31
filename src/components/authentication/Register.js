import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/API';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    courseCode: '',
    courseYear: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await registerUser(formData);
      navigate('/');
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="courseCode" placeholder="Course Code" onChange={handleChange} />
      
      <select name="courseYear" onChange={handleChange}>
        <option value="">Select Course Year</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <select name="role" onChange={handleChange}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="company">Company</option>
        <option value="admin">Admin</option>
      </select>

      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>

      <p>Already have an account? <button onClick={() => navigate('/')}>Login</button></p>
    </div>
  );
}

export default Register;
