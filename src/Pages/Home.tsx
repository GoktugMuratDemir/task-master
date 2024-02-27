import React, { useContext } from "react";
import { HeaderTitle } from "../Components/HeaderTitle";
import { FilterBar } from "../Components/FilterBar";
import TaskCard from "../Components/TaskCard";
import { TaskListContext } from "../Context/TaskListContext";
import { TaskListType } from "../Context/TaskType";

export const Home: React.FC = () => {
  const { taskList } = useContext(TaskListContext) as TaskListType;

  // console.log(taskList);

  return (
    <div className="flex flex-col gap-10">
      <HeaderTitle title="All Types" />
      <FilterBar />
      <div className="flex flex-col gap-2">
        {
          taskList.map((task,index)=>(
            <TaskCard key={index} task={task} />
          ))
        }
      </div>
    </div>
  );
};
