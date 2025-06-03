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
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Register</h2>

        <input name="firstName" placeholder="First Name" className="register-input" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" className="register-input" onChange={handleChange} />
        <input name="email" placeholder="Email" className="register-input" onChange={handleChange} />
        <input name="courseCode" placeholder="Course Code" className="register-input" onChange={handleChange} />

        <select name="courseYear" className="register-input" onChange={handleChange} defaultValue="">
          <option value="">Select Course Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="5">5th Year</option>
        </select>

        <select name="role" className="register-input" onChange={handleChange} defaultValue="">
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="company">Company</option>
          <option value="admin">Admin</option>
        </select>

        <input type="password" name="password" placeholder="Password" className="register-input" onChange={handleChange} />

        <button className="register-button-dark" onClick={handleSubmit}>Create Account</button>

        <div className="divider">or</div>

        <button className="register-button-light" onClick={() => navigate('/')}>Log in</button>
      </div>
    </div>
  );
}

export default Register;
