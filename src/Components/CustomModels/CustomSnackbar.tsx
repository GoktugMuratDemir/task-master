// Snackbar.tsx

import React, { useState, useEffect } from "react";

interface SnackbarProps {
  message: string;
  onClose: () => void;
}

export const CustomSnackbar: React.FC<SnackbarProps> = ({
  message,
  onClose,
}) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 left-4 bg-gray-800 text-white p-4 rounded-md shadow-md transition-opacity ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {message}
    </div>
  );
};

// **

// const [snackbarVisible, setSnackbarVisible] = useState(false);

// const handleSnackbarClose = () => {
//   setSnackbarVisible(false);
// };

// const showSnackbar = () => {
//   setSnackbarVisible(true);
// };

// **


// <button onClick={showSnackbar}>Snackbar Göster</button>

// {snackbarVisible && (
//   <Snackbar message="Başarılı bir şekilde kaydedildi." onClose={handleSnackbarClose} />
// )}

