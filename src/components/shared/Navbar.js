// Import React core library
import React from 'react';
// Import Link component from react-router-dom for client-side navigation
import { Link } from 'react-router-dom';

// Functional component for the Navbar displayed across pages
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        {/* Navigation link to Login page */}
        <Link className="navbar-link" to="/">Login</Link>
        {/* Navigation link to Register page */}
        <Link className="navbar-link" to="/register">Register</Link>
        {/* Navigation link to Student dashboard */}
        <Link className="navbar-link" to="/student">Student</Link>
        {/* Navigation link to Company dashboard */}
        <Link className="navbar-link" to="/company">Company</Link>
        {/* Navigation link to Admin dashboard */}
        <Link className="navbar-link" to="/admin">Admin</Link>
      </div>
    </div>
  );
}

// Export component for use in app layout
export default Navbar;
