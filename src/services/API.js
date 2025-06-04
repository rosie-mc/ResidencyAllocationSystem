// Axios API service: handles all backend HTTP requests for auth, jobs, CV, preferences, dashboards, admin, and company actions
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

// AUTH
export const loginUser = (email, password) => axios.post(`${API_URL}/login`, { email, password });
export const registerUser = (data) => axios.post(`${API_URL}/register`, data);

// JOBS
export const getJobs = () => axios.get(`${API_URL}/jobs`, getAuthHeaders());
export const postJob = (data) => axios.post(`${API_URL}/jobs`, data, getAuthHeaders());

// CV Upload
export const uploadCV = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return axios.post(`${API_URL}/upload-cv`, formData, getAuthHeaders());
};

// Preferences
export const submitPreferences = (studentId, rankings) =>
  axios.post(`${API_URL}/preferences`, { studentId, rankings }, getAuthHeaders());
export const submitFinalPreferences = (studentId, rankedJobs) =>
  axios.post(`${API_URL}/submit-preferences`, { studentId, rankedJobs }, getAuthHeaders());

// Student dashboard
export const getStudentDashboard = () => axios.get(`${API_URL}/dashboard/student`, getAuthHeaders());
export const getMatches = () => axios.get(`${API_URL}/matches`, getAuthHeaders());
export const getFinalMatch = (studentId) =>
  axios.get(`${API_URL}/match-result/${studentId}`, getAuthHeaders());

// Admin
export const runMatching = () => axios.post(`${API_URL}/admin/match`, {}, getAuthHeaders());
export const runFinalMatching = (round) => axios.post(`${API_URL}/run-matching`, { round }, getAuthHeaders());
export const openCloseForms = (status) => axios.patch(`${API_URL}/admin/forms`, { status }, getAuthHeaders());
export const getLogs = () => axios.get(`${API_URL}/admin/logs`, getAuthHeaders());
export const allocateInterviews = () => axios.post(`${API_URL}/allocate-interviews`, {}, getAuthHeaders());

// Company
export const submitInterviewScore = (studentId, score, jobId) =>
  axios.post(`${API_URL}/submit-score`, { studentId, score, jobId }, getAuthHeaders());
