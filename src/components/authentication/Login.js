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
      // store token or user info if needed
      localStorage.setItem('user', JSON.stringify(response.data));
      setError('');
      
      // Redirect based on role (simplified, backend should return role info)
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
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Login</button>
      {error && <p style={{color:'red'}}>{error}</p>}
      <p>Don't have an account? <button onClick={() => navigate('/register')}>Register</button></p>
    </div>
  );
}

export default Login;
