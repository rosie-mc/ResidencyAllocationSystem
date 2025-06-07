// Import React core library and useState hook for state management
import React, { useState } from 'react';
// Import useNavigate hook for client-side routing
import { useNavigate } from 'react-router-dom';
// Import loginUser API function to handle authentication request
import { loginUser } from '../../services/API';

// Functional component for Login page
function Login() {
  // useNavigate hook to redirect user after successful login
  const navigate = useNavigate();

  // React state hooks for form fields and error handling
  const [email, setEmail] = useState('');        
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');        

  // Handles login form submission
const handleSubmit = async () => {
  console.log("Login button clicked");
  try {
    const response = await loginUser({email, password});
    console.log("Login response:", response);

    localStorage.setItem('user', JSON.stringify(response.data));
    setError('');

    const role = response.data.role;
    console.log("User role:", role);

    if (role === 'student') navigate('/student');
    else if (role === 'company') navigate('/company');
    else if (role === 'admin') navigate('/admin');
    else navigate('/');
  } catch (err) {
    console.error("Login failed:", err);
    setError('Invalid email or password.');
  }
};

  // JSX layout for login form
  return (
    <div className="login-container">
      <div className="login-box">

        {/* Title */}
        <h2 className="login-title">Log in</h2>

        {/* Email input */}
        <input
          type="text"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        {/* Password input */}
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {/* Display error if login fails */}
        {error && <p className="error-text">{error}</p>}

        {/* Login button */}
        <button className="login-button" onClick={handleSubmit}>
          Log in
        </button>

        {/* Divider */}
        <div className="divider">or</div>

        {/* Navigate to registration page */}
        <button className="register-button" onClick={() => navigate('/register')}>
          Register
        </button>

      </div>
    </div>
  );
}

// Export component for use in app routing
export default Login;
