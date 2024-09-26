import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('authToken'); // Hämtar JWT-token från localStorage
  
  // Om ingen token finns, omdirigera till login-sidan
  if (!token) {
    return <Navigate to="/" />;
  }

  // Om token finns, rendera den skyddade sidan
  return children;
};

export default ProtectedRoute;
