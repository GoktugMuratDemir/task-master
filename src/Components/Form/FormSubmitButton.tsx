import React from "react";

interface FormSubmitButtonProps {
  title: string;
}

export const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  title,
}) => {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
    >
      {title}
    </button>
  );
};
