import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <h1>loading</h1>;
  console.log(user);

  if (!user) return <Navigate to="/" />;

  return <Outlet />;

};

export default ProtectedRoute;
