import React from "react";

interface FormSelectGroupProps {
  label: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  list: any[];
}

export const FormSelectGroup: React.FC<FormSelectGroupProps> = ({
  label,
  value,
  onChange,
  list,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600">
        {label}:
      </label>
      <select
        value={value}
        onChange={onChange}
        className="mt-2 p-2 border rounded-md w-full cursor-pointer"
      >
        <option value={0}>Please Select an Option</option>
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};
