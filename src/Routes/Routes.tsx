import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { LayoutMain } from "../Layouts/Main";
import { Home } from "../Pages/Home";
import { DetailPage } from "../Pages/Detail";
import { NotFound404 } from "../Pages/NotFound404";


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <LayoutMain />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail/:id",
            element: <DetailPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound404 />,
      },
    ],
  },
]);

export default routes;
