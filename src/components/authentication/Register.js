// Import React core library and useState hook for state management
import React, { useState } from 'react';
// Import useNavigate hook for programmatic routing
import { useNavigate } from 'react-router-dom';
// Import registerUser API function to handle registration requests
import { registerUser } from '../../services/API';

// Functional component for user registration page
function Register() {
  // useNavigate hook allows redirection after successful registration
  const navigate = useNavigate();

  // React state hook to store registration form input values
  const [formData, setFormData] = useState({
    email: '',        
    password: '',     
    firstName: '',    
    lastName: '',     
    courseCode: '',   
    courseYear: '',   
    role: ''          
  });

  // Handles input changes and updates formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handles form submission to register a user
  const handleSubmit = async () => {
    try {

      console.log("Attempting registration with:", formData);

      await registerUser(formData);
      // On success, navigate back to login page
      navigate('/');
    } catch (err) {

      console.error("Registration failed:", err);
     alert("Registration failed");

      // On error, show alert message

    }
  };

  // JSX layout returned by component
  return (
    <div className="register-container">
      <div className="register-box">

        {/* Form Title */}
        <h2 className="register-title">Register</h2>

        {/* Input fields for user information */}
        <input 
          name="firstName" 
          placeholder="First Name" 
          className="register-input" 
          onChange={handleChange} 
        />
        <input 
          name="lastName" 
          placeholder="Last Name" 
          className="register-input" 
          onChange={handleChange} 
        />
        <input 
          name="email" 
          placeholder="Email" 
          className="register-input" 
          onChange={handleChange} 
        />
        <input 
          name="courseCode" 
          placeholder="Course Code" 
          className="register-input" 
          onChange={handleChange} 
        />

        {/* Dropdown for selecting course year */}
        <select 
          name="courseYear" 
          className="register-input" 
          onChange={handleChange} 
          defaultValue=""
        >
          <option value="">Select Course Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
          <option value="5">5th Year</option>
        </select>

        {/* Dropdown for selecting user role */}
        <select 
          name="role" 
          className="register-input" 
          onChange={handleChange} 
          defaultValue=""
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="company">Company</option>
          <option value="admin">Admin</option>
        </select>

        {/* Password input */}
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          className="register-input" 
          onChange={handleChange} 
        />

        {/* Submit button */}
        <button className="register-button-dark" onClick={handleSubmit}>
          Create Account
        </button>

        {/* Divider text */}
        <div className="divider">or</div>

        {/* Link back to login page */}
        <button className="register-button-light" onClick={() => navigate('/')}>
          Log in
        </button>
      </div>
    </div>
  );
}

// Export component for use in routing system
export default Register;
