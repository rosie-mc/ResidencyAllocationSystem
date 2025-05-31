import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Login</Link> | {" "}
      <Link to="/register">Register</Link> | {" "}
      <Link to="/student">Student</Link> | {" "}
      <Link to="/company">Company</Link> | {" "}
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;
