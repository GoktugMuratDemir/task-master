// Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-4 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

// ** usage

// call this part in tsx

  //  <button onClick={openModal}>Open Modal</button>
  //  <CustomModal isOpen={isModalOpen} onClose={closeModal}>
  //      {/* contents add here */}
  //      <h1>Modal Content</h1>
  //      <button onClick={closeModal}>Close Modal</button>
  //  </CustomModal> 


// add this func in func part

// const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
// const openModal = () => setIsModalOpen(true);
// const closeModal = () => setIsModalOpen(false);



export default Modal;
