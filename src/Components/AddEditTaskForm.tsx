import React, { useContext, useState } from "react";
import { CategoryEnums } from "../Enums/CategoryEnums";
import { TaskListContext } from "../Context/TaskListContext";
import { TaskListType } from "../Context/TaskType";

interface AddEditTaskFormProps {
  id: number | null;
  closeModal: () =>void
}

interface FormData {
  title: string;
  category: number;
}

const AddEditTaskForm: React.FC<AddEditTaskFormProps> = ({ id ,closeModal}) => {
  const { addTask } = useContext(TaskListContext) as TaskListType;

  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: 0,
  });

  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      category: parseInt(e.target.value, 10),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.trim() === "" || formData.category === 0) {
      setError("Lütfen tüm alanları doldurun.");
    } else {
      addTask(formData.title, formData.category);
      closeModal()
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 rounded-md">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <label className="block mb-4">
        <span className="text-gray-700">Task Name:</span>
        <input
          type="text"
          value={formData.title}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Category</span>
        <select
          value={formData.category}
          onChange={handleSelectChange}
          className="mt-1 p-2 border rounded-md w-full cursor-pointer"
        >
          <option value={0}>Please Select a Option</option>
          {CategoryEnums.map((item) => (
            <option key={item.value} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </label>

      <div className="flex justify-end mt-2">
        <button
          type="submit"
          className=" bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          {id ? "Edit Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default AddEditTaskForm;
