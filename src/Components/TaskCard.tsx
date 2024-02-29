import React, { useContext } from "react";
import { TaskListType, TaskProps } from "../Context/TaskType";
import { TaskListContext } from "../Context/TaskListContext";
import { CategoryEnums } from "../Enums/CategoryEnums";
import { CategoryEnumsProp } from "../Enums/CategoryEnumsType";

interface TaskCardProps {
  task: TaskProps;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { changeStatus } = useContext(TaskListContext) as TaskListType;

  const selectEnumCategory: CategoryEnumsProp | undefined = CategoryEnums.find(
    (category) => category.value === task.categorie
  );

  return (
    <div className="bg-white rounded grid grid-cols-12 items-center py-4 divide-x-1">
      <div className="col-span-2 border-r-2">
        <div className="flex justify-center">
          <button
            onClick={() => changeStatus(task.id)}
            className="w-6 h-6 border-2 border-purple-600 rounded-full flex items-center justify-center cursor-pointer"
          >
            {task.done && (
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            )}
          </button>
        </div>
      </div>
      <div className="col-span-8 px-8">
        <div>{task.title}</div>
        <div className="flex gap-2 items-center">
          <div
            style={{ background: selectEnumCategory?.color }}
            className={` w-2 h-2 rounded-full`}
          ></div>
          <div>{selectEnumCategory?.title}</div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center">
        <button>
          <img
            className="object-cover w-4 h-4 "
            src="/Assets/edit.svg"
            alt="Edit"
          />
        </button>
      </div>
      <div className="col-span-1 flex justify-center">
        <button>
          <img
            className="object-cover w-4 h-4 "
            src="/Assets/erase.svg"
            alt="Edit"
          />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
