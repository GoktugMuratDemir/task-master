import React, { useContext, useState } from "react";
import { TaskListType, TaskProps } from "../Context/TaskType";
import { TaskListContext } from "../Context/TaskListContext";
import { CategoryEnums } from "../Enums/CategoryEnums";
import { CategoryEnumsProp } from "../Enums/CategoryEnumsType";
import CustomModal from "./CustomModels/CustomModal";
import AddEditTaskForm from "./AddEditTaskForm";
import ConfirmMessage from "./CustomModels/CustomConfirmMessage";
import { RoleListContext } from "../Context/RoleListContext";
import { RoleListType } from "../Context/RoleType";

interface TaskCardProps {
  task: TaskProps;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { changeStatus, deleteTask } = useContext(
    TaskListContext
  ) as TaskListType;

  const { isAdminUser, isAccessibility, isAccessibilityPermission } =
    useContext(RoleListContext) as RoleListType;

  const selectEnumCategory: CategoryEnumsProp | undefined = CategoryEnums.find(
    (category) => category.value === task.category
  );

  const [isConfirmModal, setIsConfirmModal] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () =>
    isAccessibilityPermission(task.userId) && setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirm = () => {
    deleteTask(task.id);
    closeModal();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="grid grid-cols-3">
        <p className="col-span-1 text-xs text-gray-500">
          Creator : {task.isCreatorAdmin ? "Admin" : "User"}
        </p>
        <p className="col-span-1 text-xs text-gray-500 flex items-center gap-1 justify-center">
          Accessibility :{" "}
          {isAdminUser || isAccessibility(task.userId) ? (
            <img src="/Assets/checked.png" alt="" className="w-4 h-4" />
          ) : (
            <img src="/Assets/remove.png" alt="" className="w-4 h-4" />
          )}{" "}
        </p>
        <p className="col-span-1 text-xs text-gray-500 text-end">{task.userEmail}</p>
      </div>
      <div className="w-full h-px bg-slate-500 my-2"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => {
              isAccessibilityPermission(task.userId) && changeStatus(task.id);
            }}
            className="w-6 h-6 border-2 border-purple-600 rounded-full flex items-center justify-center cursor-pointer mr-4"
          >
            {task.isDone && (
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            )}
          </button>
          <div>
            <h2 className="text-lg font-bold">{task.title}</h2>
            <div className="flex items-center gap-2">
              <div
                style={{ background: selectEnumCategory?.color }}
                className={` w-2 h-2 rounded-full`}
              ></div>
              <p className="text-sm text-gray-500">
                {selectEnumCategory?.title}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setIsConfirmModal(false);
              openModal();
            }}
            className="mr-2"
          >
            <img
              className="object-cover w-4 h-4 "
              src="/Assets/edit.svg"
              alt="Edit"
            />
          </button>
          <button
            onClick={() => {
              setIsConfirmModal(true);
              openModal();
            }}
          >
            <img
              className="object-cover w-4 h-4 "
              src="/Assets/erase.svg"
              alt="Delete"
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
    </div>
  );
};

export default TaskCard;
