import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { TaskListContextProvider } from "./Context/TaskListContext";
import { RoleListContextProvider } from "./Context/RoleListContext";
import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <RoleListContextProvider>
      <TaskListContextProvider>
        <RouterProvider router={routes} />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </TaskListContextProvider>
    </RoleListContextProvider>
  );
};
