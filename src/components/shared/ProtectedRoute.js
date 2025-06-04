// Import React core library
import React from 'react';
// Import Navigate component from react-router-dom to redirect users
import { Navigate } from 'react-router-dom';

// Functional component to wrap protected routes that require authorization
function ProtectedRoute({ user, allowedRoles, children }) {
  
  // If there is no logged-in user OR user's role is not within the allowedRoles array
  if (!user || !allowedRoles.includes(user.role)) {
    // Redirect user to home page ("/") if access is unauthorized
    return <Navigate to="/" />;
  }

  // If user is authorized, render the protected child component(s)
  return children;
}

// Export component for use in routing logic elsewhere in the application
export default ProtectedRoute;
