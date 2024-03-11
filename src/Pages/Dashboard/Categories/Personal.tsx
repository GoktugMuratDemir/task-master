import React, { useContext, useState } from "react";
import { TaskListContext } from "../../../Context/TaskListContext";
import { HeaderTitle } from "../../../Components/HeaderTitle";
import { FilterBar } from "../../../Components/FilterBar";
import TaskCard from "../../../Components/TaskCard";
import Pagination from "../../../Components/Pagination";
import { TaskListType } from "../../../Context/TaskType";

export const PersonalCategoryPage = () => {
  const { filterTaskList } = useContext(TaskListContext) as TaskListType;

  // CategorieEnums Personal Category === 3
  const homeTasks = filterTaskList.filter((task) => task.category === 3);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(homeTasks.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedTasks = homeTasks.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-10">
      <HeaderTitle title="All Types" />
      <FilterBar />

      <div className="flex flex-col gap-2">
        {displayedTasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
