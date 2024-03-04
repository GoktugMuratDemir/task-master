import React, { useContext, useEffect, useState, useCallback } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import { TaskListType } from "../Context/TaskType";
import CustomModal from "./CustomModal";
import AddEditTaskForm from "./AddEditTaskForm";

const buttonStyles = (isSelected: boolean) => {
  return isSelected
    ? "bg-gray-100 text-sm font-semibold p-2 rounded-lg transition duration-300 ease-in-out"
    : "text-gray-400 text-sm bg-transparent border border-solid border-gray-400 rounded-lg px-2";
};

export const FilterBar: React.FC = () => {
  const { taskList, setFilterTaskList, filterTasksByStatus } = useContext(
    TaskListContext
  ) as TaskListType;

  const [selectedFilter, setSelectedFilter] = useState("all");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const renderButton = (filterType: string, text: string) => (
    <button
      className={buttonStyles(selectedFilter === filterType)}
      onClick={() => handleFilterButtonClick(filterType)}
    >
      {text}
    </button>
  );

  useEffect(() => {
    const filterStatusFunc = () => {
      switch (selectedFilter) {
        case "all":
          setFilterTaskList(taskList);
          break;
        case "done":
          filterTasksByStatus(true);
          break;
        case "notDone":
          filterTasksByStatus(false);
          break;
        default:
          break;
      }
    };

    filterStatusFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter, taskList]);

  const handleFilterButtonClick = useCallback((filter: string) => {
    setSelectedFilter(filter);
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center text-lg font-semibold text-gray-800">
          <button
            className="bg-gray-100 p-2 rounded-lg flex items-center gap-2 justify-center"
            onClick={openModal}
          >
            {" "}
            <p className="text-sm font-semibold"> Add Task</p>
            <img src="/Assets/add.svg" alt="" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex gap-2">
          {renderButton("all", "All")}
          {renderButton("done", "Done")}
          {renderButton("notDone", "Not Done")}
        </div>
      </div>

      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        <AddEditTaskForm id={null} closeModal={closeModal} />
      </CustomModal>
    </>
  );
};
