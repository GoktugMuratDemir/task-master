import React, { useContext, useState } from "react";
import { TaskListType, TaskProps } from "../Context/TaskType";
import { TaskListContext } from "../Context/TaskListContext";
import { CategoryEnums } from "../Enums/CategoryEnums";
import { CategoryEnumsProp } from "../Enums/CategoryEnumsType";
import CustomModal from "./CustomModal";
import AddEditTaskForm from "./AddEditTaskForm";
import ConfirmMessage from "./ConfirmMessage";

interface TaskCardProps {
  task: TaskProps;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { changeStatus, deleteTask } = useContext(
    TaskListContext
  ) as TaskListType;

  const selectEnumCategory: CategoryEnumsProp | undefined = CategoryEnums.find(
    (category) => category.value === task.category
  );

  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirm = () => {
    deleteTask(task.id);
    closeModal();
  };

  return (
    <>
      <div className="bg-white rounded-lg grid grid-cols-12 items-center py-4 divide-x-1">
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
          <div className="text-base max-md:text-sm truncate">{task.title}</div>
          <div className="flex gap-2 items-center">
            <div
              style={{ background: selectEnumCategory?.color }}
              className={` w-2 h-2 rounded-full`}
            ></div>
            <div className="text-sm max-md:text-xs text-teal-800 italic">
              {selectEnumCategory?.title}
            </div>
          </div>
        </div>
        <div className="col-span-1 flex justify-center max-md:justify-start">
          <button
            onClick={() => {
              setIsConfirmModal(false);
              openModal();
            }}
          >
            <img
              className="object-cover w-4 h-4 "
              src="/Assets/edit.svg"
              alt="Edit"
            />
          </button>
        </div>
        <div className="col-span-1 flex justify-center max-md:justify-start">
          <button
            onClick={() => {
              setIsConfirmModal(true);
              openModal();
            }}
          >
            <img
              className="object-cover w-4 h-4 "
              src="/Assets/erase.svg"
              alt="Edit"
            />
          </button>
        </div>
      </div>
      <CustomModal isOpen={isModalOpen} onClose={closeModal}>
        {isConfirmModal ? (
          <ConfirmMessage
            title={task.title}
            message={`Are you sure you want to delete this task ? `}
            onConfirm={handleConfirm}
            onCancel={closeModal}
          />
        ) : (
          <AddEditTaskForm id={task.id} closeModal={closeModal} />
        )}
      </CustomModal>
    </>
  );
};

export default TaskCard;
