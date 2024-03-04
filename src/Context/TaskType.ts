export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
  category: number;
  // color: string;
}

export type TaskListType = {
  taskList: TaskProps[];
  filterTaskList: TaskProps[];
  setFilterTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  changeStatus: (taskId: number) => void;
  filterTasksByStatus: (isDone: boolean) => void;
  addTask: (title: string, category: number) => void;
  findItemInArray: (id: number | null) => TaskProps | undefined;
  updateTask: (id: number, title: string, category: number) => void;
  deleteTask: (id: number) => void;
};
