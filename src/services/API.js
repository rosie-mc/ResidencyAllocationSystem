import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // update this when backend is ready
  headers: {
    'Content-Type': 'application/json'
  }
});

// Example API endpoints (ill add more as i build):
export const loginUser = (data) => api.post('/login', data);
export const registerUser = (data) => api.post('/register', data);

export default api;
