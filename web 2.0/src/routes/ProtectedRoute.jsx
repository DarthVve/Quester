import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

// const tk = cookies.get("tk")

const ProtectedRoute = () => {
  const location = useLocation();
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;