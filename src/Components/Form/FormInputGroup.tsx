import React from "react";

interface FormInputGroupProps {
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInputGroup: React.FC<FormInputGroupProps> = ({
  type,
  label,
  value,
  onChange,
}) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-600">
        {label}:
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required
        className="mt-1 p-2 w-full border rounded-md"
      />
    </>
  );
};
