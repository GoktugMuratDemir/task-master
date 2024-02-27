import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { TaskListContextProvider } from "./Context/TaskListContext";

export const App = () => {
  return (
    <TaskListContextProvider>
      <RouterProvider router={routes} />
    </TaskListContextProvider>
  );
};
