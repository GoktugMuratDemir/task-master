import React, { useContext, useEffect, useState, useCallback } from "react";
import { TaskListContext } from "../Context/TaskListContext";
import { TaskListType } from "../Context/TaskType";

const buttonStyles = (isSelected: boolean) => {
  return isSelected
    ? "bg-gray-100 text-sm font-semibold p-2 rounded transition duration-300 ease-in-out"
    : "text-gray-400 text-sm bg-transparent border border-solid border-gray-400 rounded px-2";
};

export const FilterBar: React.FC = () => {
  const { taskList, setFilterTaskList, filterTasksByStatus } = useContext(TaskListContext) as TaskListType;
  const [selectedFilter, setSelectedFilter] = useState("all");

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
  }, [selectedFilter, setFilterTaskList, taskList, filterTasksByStatus]);

  const handleFilterButtonClick = useCallback((filter: string) => {
    setSelectedFilter(filter);
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex items-center text-lg font-semibold text-gray-800">Tasks</div>
      <div className="flex gap-2">
        {renderButton("all", "All")}
        {renderButton("done", "Done")}
        {renderButton("notDone", "Not Done")}
      </div>
    </div>
  );
};
