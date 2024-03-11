import React, { useContext, useEffect, useState, useCallback } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import { TaskListType } from "../Context/TaskType";
import CustomModal from "./CustomModels/CustomModal";
import AddEditTaskForm from "./AddEditTaskForm";

const buttonStyles = (isSelected: boolean) => {
  return isSelected
    ? "bg-gray-100 text-sm font-semibold p-2 rounded-lg transition duration-300 ease-in-out max-md:text-xs"
    : "text-gray-400 text-sm bg-transparent border border-solid border-gray-400 rounded-lg px-2 max-md:text-xs";
};

export const FilterBar: React.FC = () => {
  const {
    taskList,
    setFilterTaskList,
    filterTasksByStatus,
    searchTasks,
    resetTasks,
  } = useContext(TaskListContext) as TaskListType;

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

  const [searchKeyword, setSearchKeyword] = useState("");

  const searchHandleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchTasks(searchKeyword);
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-lg font-semibold text-gray-800">
            <button
              className="bg-gray-100 p-2 rounded-lg flex items-center gap-2 justify-center"
              onClick={openModal}
            >
              {" "}
              <p className="text-sm font-semibold max-md:text-xs">Add Task</p>
              <img src="/Assets/add.svg" alt="" className="w-6 h-6 max-md:w-3 max-md:h-3" />
            </button>
          </div>

          <form
            onSubmit={handleSearchSubmit}
            className="flex gap-1 items-center"
          >
            <input
              type="text"
              value={searchKeyword}
              onChange={searchHandleInput}
              className="p-2 border rounded-md max-md:w-7/12 "
            />
           <div className="flex gap-1 max-md:flex-col">
           <button type="submit" className="border rounded-md bg-white p-1">
              <img src="/Assets/search.svg" alt="" className="w-6 h-6 max-md:w-3 max-md:h-3" />
            </button>
            <button
              type="button"
              onClick={resetTasks}
              className="border rounded-md bg-white p-1"
            >
              <img src="/Assets/reset.png" alt="" className="w-6 h-6 max-md:w-3 max-md:h-3" />
            </button>
           </div>
          </form>
        </div>

        <div className="flex gap-2 max-md:flex-col">
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
