import React from "react";
import { useNavigate } from "react-router-dom";

interface AuthNavigateButtonProps {
  title: string;
  to: string;
}

export const AuthNavigateButton: React.FC<AuthNavigateButtonProps> = ({
  title,
  to,
}) => {
  const navigate = useNavigate();
  return (
    <div className="mt-4 text-center">
      <button
        className="text-blue-500 hover:underline"
        onClick={() => navigate(to)}
      >
        {title}
      </button>
    </div>
  );
};
