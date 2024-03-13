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
      isDone: false,
      category: 2,
    },
    {
      id: 2,
      title: "Task 2",
      isDone: true,
      category: 3,
    },
    {
      id: 3,
      title: "Task 3",
      isDone: false,
      category: 1,
    },
    {
      id: 4,
      title: "Task 4",
      isDone: true,
      category: 2,
    },
    {
      id: 5,
      title: "Task 5",
      isDone: false,
      category: 3,
    },
    {
      id: 6,
      title: "Task 6",
      isDone: true,
      category: 1,
    },
    {
      id: 7,
      title: "Task 7",
      isDone: false,
      category: 2,
    },
    {
      id: 8,
      title: "Task 8",
      isDone: true,
      category: 3,
    },
    {
      id: 9,
      title: "Task 9",
      isDone: false,
      category: 1,
    },
    {
      id: 10,
      title: "Task 10",
      isDone: true,
      category: 2,
    },
  ]);

  const [filterTaskList, setFilterTaskList] = useState<TaskProps[]>([]);

  useEffect(() => {
    setFilterTaskList(taskList);
  }, [taskList]);

  const findItemInArray = (id: number | null): TaskProps | undefined => {
    return taskList.find((task) => task.id === id);
  };

  const changeStatus = (id: number) => {
    setFilterTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, done: !task.isDone } : task
      )
    );
  };

  const filterTasksByStatus = (isDone: boolean) => {
    const updatedArray = taskList.filter((task) => task.isDone === isDone);
    setFilterTaskList(updatedArray);
  };

  const addTask = (title: string, category: number) => {
    const newTask = {
      id: taskList.length + 1,
      title: title,
      isDone: false,
      category: category,
    };

    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };

  const updateTask = (id: number, title: string, category: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, title, category } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== id)
    );
  };

  const searchTasks = (keyword: string) => {
    const filteredTasks = taskList.filter((task) =>
      task.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilterTaskList(filteredTasks);
  };

  const resetTasks = () => {
    setFilterTaskList(taskList);
  };

  return (
    <TaskListContext.Provider
      value={{
        taskList,
        filterTaskList,
        setTaskList,
        changeStatus,
        filterTasksByStatus,
        setFilterTaskList,
        addTask,
        findItemInArray,
        updateTask,
        deleteTask,
        searchTasks,
        resetTasks
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
