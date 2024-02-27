import React, { useState, createContext, useEffect } from "react";
import { TaskListType, TaskProps } from "./TaskType";

interface ChildrenProps {
  children: React.ReactNode;
}

export const TaskListContext = createContext<TaskListType | null>(null);

export const TaskListContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [taskList, setTaskList] = useState<Array<TaskProps>>([
    {
      id: 1,
      title: "Task 1",
      done: false,
      categorie: "Work",
      color: "#00FF00",
    },
    {
      id: 2,
      title: "Task 2",
      done: true,
      categorie: "Personal",
      color: "#C0C0C0",
    },
    {
      id: 3,
      title: "Task 3",
      done: false,
      categorie: "Home",
      color: "#00FFFF",
    },
    {
      id: 4,
      title: "Task 4",
      done: true,
      categorie: "Work",
      color: "#00FF00",
    },
    {
      id: 5,
      title: "Task 5",
      done: false,
      categorie: "Personal",
      color: "#C0C0C0",
    },
    {
      id: 6,
      title: "Task 6",
      done: true,
      categorie: "Home",
      color: "#00FFFF",
    },
    {
      id: 7,
      title: "Task 7",
      done: false,
      categorie: "Work",
      color: "#00FF00",
    },
    {
      id: 8,
      title: "Task 8",
      done: true,
      categorie: "Personal",
      color: "#C0C0C0",
    },
    {
      id: 9,
      title: "Task 9",
      done: false,
      categorie: "Home",
      color: "#00FFFF",
    },
    {
      id: 10,
      title: "Task 10",
      done: true,
      categorie: "Work",
      color: "#00FF00",
    },
  ]);

  const [filterTaskList, setFilterTaskList] = useState<TaskProps[]>([]);

  useEffect(() => {
    setFilterTaskList(taskList);
  }, [taskList]);

  const changeStatus = (id: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const filterTasksByStatus = (isDone: boolean) => {
    const updatedArray =  taskList.filter((task) => task.done === isDone);
    setFilterTaskList(updatedArray)
  };

  return (
    <TaskListContext.Provider
      value={{
        taskList,
        filterTaskList,
        setTaskList,
        changeStatus,
        filterTasksByStatus,
        setFilterTaskList
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
