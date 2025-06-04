import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ user, allowedRoles, children }) {
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
