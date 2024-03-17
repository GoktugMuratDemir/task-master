import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { TaskListContextProvider } from "./Context/TaskListContext";
import { RoleListContextProvider } from "./Context/RoleListContext";

export const App = () => {
  return (
    <RoleListContextProvider>
      <TaskListContextProvider>
        <RouterProvider router={routes} />
      </TaskListContextProvider>
    </RoleListContextProvider>
  );
};
