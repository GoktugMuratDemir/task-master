import React, { useState, createContext, useEffect } from "react";
import { TaskListType, TaskProps } from "./TaskType";
import { db } from "../Config/FireBase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { generateRandomId } from "../Utils/RandomUniqId";

interface ChildrenProps {
  children: React.ReactNode;
}

export const TaskListContext = createContext<TaskListType | null>(null);

export const TaskListContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [taskList, setTaskList] = useState<Array<TaskProps>>([]);

  const [filterTaskList, setFilterTaskList] = useState<TaskProps[]>([]);

  useEffect(() => {
    setFilterTaskList(taskList);
  }, [taskList]);

  // ** With Fire Base Section

  // ** get taskList
  useEffect(() => {
    getAllFirebaseTasks();
  }, []);

  const getAllFirebaseTasks = async () => {
    const tasksCollection = collection(db, "tasks");
    const tasksQuery = query(tasksCollection);

    const unsubscribe = onSnapshot(tasksQuery, (querySnapshot) => {
      const newTaskList: TaskProps[] = [];
      querySnapshot.forEach((doc) => {
        newTaskList.push({ ...doc.data(), id: doc.id } as unknown as TaskProps);
      });
      setTaskList(newTaskList);
    });

    return () => {
      unsubscribe();
    };
  };

  // ** add Task

  const addTask = async (title: string, category: number) => {
    const newTask = {
      id: generateRandomId(),
      title: title,
      isDone: false,
      category: category,
    };

    await addDoc(collection(db, "tasks"), newTask);

    // setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };

  // ** delete Task

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));

    // setTaskList((prevTaskList) =>
    //   prevTaskList.filter((task) => task.id !== id)
    // );
  };

  // ** update Task

  const updateTask = async (id: string, title: string, category: number) => {
    const updatedTask = {
      title: title,
      category: category,
    };

    await updateDoc(doc(db, "tasks", id), updatedTask);

    // setTaskList((prevTaskList) =>
    //   prevTaskList.map((task) =>
    //     task.id === id ? { ...task, title, category } : task
    //   )
    // );
  };

  const changeStatus = async (id: string) => {
    const foundedTask = findItemInArray(id);
    if (foundedTask) {
      const updatedTask = {
        isDone: !foundedTask.isDone,
      };
      await updateDoc(doc(db, "tasks", id), updatedTask);
      // setTaskList((prevTaskList) =>
      //   prevTaskList.map((task) =>
      //     task.id === id ? { ...task, isDone: !task.isDone } : task
      //   )
      // );
    }
  };

  // **

  const findItemInArray = (id: string | null): TaskProps | undefined => {
    return taskList.find((task) => task.id === id);
  };

  const filterTasksByStatus = (isDone: boolean) => {
    const updatedArray = taskList.filter((task) => task.isDone === isDone);
    setFilterTaskList(updatedArray);
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
        resetTasks,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export const tempArray = [
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
];
