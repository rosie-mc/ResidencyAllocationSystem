import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <Link className="navbar-link" to="/">Login</Link>
        <Link className="navbar-link" to="/register">Register</Link>
        <Link className="navbar-link" to="/student">Student</Link>
        <Link className="navbar-link" to="/company">Company</Link>
        <Link className="navbar-link" to="/admin">Admin</Link>
      </div>
    </div>
  );
}

export default Navbar;
