import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = "/login",
}) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // If the user is not logged in, redirect them to the login page
    return <Navigate to={redirectPath} replace />;
  }

  // If the user is logged in, render the protected components
  return <Outlet />;
};

export default ProtectedRoute;
