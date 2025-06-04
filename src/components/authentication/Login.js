import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/API';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      setError('');

      const role = response.data.role;
      if (role === 'student') navigate('/student');
      else if (role === 'company') navigate('/company');
      else if (role === 'admin') navigate('/admin');
      else navigate('/');
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Log in</h2>

        <input
          type="text"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button className="login-button" onClick={handleSubmit}>Log in</button>

        <div className="divider">or</div>

        <button className="register-button" onClick={() => navigate('/register')}>Register</button>
      </div>
    </div>
  );
}

export default Login;
