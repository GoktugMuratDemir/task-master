import React, { useContext, useEffect, useState } from "react";
import { CategoryEnums } from "../Enums/CategoryEnums";
import { TaskListContext } from "../Context/TaskListContext";
import { TaskListType } from "../Context/TaskType";
import { FormInputGroup } from "./Form/FormInputGroup";
import { FormSelectGroup } from "./Form/FormSelectGroup";
import { FormSubmitButton } from "./Form/FormSubmitButton";

interface AddEditTaskFormProps {
  id: string | null;
  closeModal: () => void;
}

interface FormData {
  title: string;
  category: number;
}

const AddEditTaskForm: React.FC<AddEditTaskFormProps> = ({
  id,
  closeModal,
}) => {
  const { addTask, updateTask, findItemInArray } = useContext(
    TaskListContext
  ) as TaskListType;

  const [formData, setFormData] = useState<FormData>({
    title: "",
    category: 0,
  });

  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      const findedItem = findItemInArray(id);
      if (findedItem) {
        setFormData({
          title: findedItem.title,
          category: findedItem.category || 0,
        });
      }
    }
  }, [findItemInArray, id]);

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
      id
        ? updateTask(id, formData.title, formData.category)
        : addTask(formData.title, formData.category);
      closeModal();
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 rounded-md flex flex-col gap-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}

      <FormInputGroup
        type="text"
        value={formData.title}
        label="Task Name"
        onChange={handleInputChange}
      />

      <FormSelectGroup
        value={formData.category}
        label="Category"
        onChange={handleSelectChange}
        list={CategoryEnums}
      />

      <FormSubmitButton title={id ? "Edit Task" : "Add Task"} />
    </form>
  );
};

export default AddEditTaskForm;
