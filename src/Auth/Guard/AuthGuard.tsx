import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/Auth/useAuth";

export const AuthGuard: React.FC = () => {
  const authUser = useAuth();

  // console.log("au", authUser);

  if (authUser === undefined) {
    return null;
  }

  return !authUser ? <Outlet /> : <Navigate to="/" />;
};
