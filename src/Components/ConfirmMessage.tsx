import React from "react";

interface ConfirmMessageProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmMessage: React.FC<ConfirmMessageProps> = ({
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <div  className="flex flex-col gap-2">
        <p className="text-3xl">{title}</p>
        <p className="text-base">{message}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmMessage;
