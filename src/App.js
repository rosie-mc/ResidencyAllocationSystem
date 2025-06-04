import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// Shared
import Navbar from './components/shared/Navbar';

// Authentication
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';

// Student
import StudentHome from './components/student/StudentHome';
import StudentJobsAndRanking from './components/student/StudentJobsAndRanking';
import StudentApplication from './components/student/StudentApplication';

// Company
import CompanyHome from './components/company/CompanyHome';
import CompanyDashboard from './components/company/CompanyDashboard';

// Admin
import AdminSelectYear from './components/admin/AdminSelectYear';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student */}
        <Route path="/student" element={<StudentHome />} />
        <Route path="/student/jobsranking" element={<StudentJobsAndRanking />} />
        <Route path="/student/application" element={<StudentApplication />} />

        {/* Company */}
        <Route path="/company" element={<CompanyHome />} />
        <Route path="/company/dashboard" element={<CompanyDashboard />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminSelectYear />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;



