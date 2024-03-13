import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/FireBase";

export const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async (): Promise<void> => {
    try {
      await signOut(auth);
      navigate("/auth/login");
    } catch (error) {}
  };
  return (
    <button
      className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};
