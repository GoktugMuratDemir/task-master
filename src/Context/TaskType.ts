export interface TaskProps {
  id: string;
  userId : string;
  userEmail: string;
  isCreatorAdmin: boolean;
  title: string;
  isDone: boolean;
  category: number;
  // color: string;
}

export type TaskListType = {
  taskList: TaskProps[];
  filterTaskList: TaskProps[];
  setFilterTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
  changeStatus: (taskId: string) => void;
  filterTasksByStatus: (isDone: boolean) => void;
  addTask: (title: string, category: number) => void;
  findItemInArray: (id: string | null) => TaskProps | undefined;
  updateTask: (id: string, title: string, category: number) => void;
  deleteTask: (id: string) => void;
  searchTasks: (keyword: string) => void;
  resetTasks: () => void;
};



