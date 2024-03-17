import React, { useContext, useState } from "react";
import { HeaderTitle } from "../../Components/HeaderTitle";
import { FilterBar } from "../../Components/FilterBar";
import TaskCard from "../../Components/TaskCard";
import { TaskListContext } from "../../Context/TaskListContext";
import { TaskListType } from "../../Context/TaskType";
import Pagination, { defaultItemsPerPage } from "../../Components/Pagination";

export const Home: React.FC = () => {
  const { filterTaskList } = useContext(TaskListContext) as TaskListType;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = defaultItemsPerPage;

  const totalPages = Math.ceil(filterTaskList.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedTasks = filterTaskList.slice(startIndex, endIndex);

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
