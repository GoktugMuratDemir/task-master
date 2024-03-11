import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/Auth/useAuth";

export const AuthGuard: React.FC = () => {
  const authUser = useAuth();

  if (!authUser) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};
