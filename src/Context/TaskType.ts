export interface TaskProps{
    id:number;
    title: string;
    done:boolean;
    categorie: string;
    color: string;
};

export type TaskListType = {
    taskList: TaskProps[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskProps[]>>;
    changeStatus: (taskId:number) =>void;
    // doneTasks: TaskProps[];
    // notDoneTasks: TaskProps[];
    // addTask:(task: TaskProps)=>void;
    // checkTask: (id:number) =>void;
    // deleteTask: (id:number)=>void;
}