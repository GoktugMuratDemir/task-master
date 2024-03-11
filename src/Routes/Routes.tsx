import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "../Pages/Dashboard/Home";
import { DetailPage } from "../Pages/Dashboard/Detail";
import { NotFound404 } from "../Pages/NotFound404";
import { HomeCategoryPage } from "../Pages/Dashboard/Categories/Home";
import { WorkCategoryPage } from "../Pages/Dashboard/Categories/Work";
import { PersonalCategoryPage } from "../Pages/Dashboard/Categories/Personal";

import { Login } from "../Pages/Auth/Login";
import { Register } from "../Pages/Auth/Register";
import { AuthGuard } from "../Auth/Guard/AuthGuard";
import { GuestGuard } from "../Auth/Guard/GuestGuard";


const routes = createBrowserRouter([
  {
    path: "auth",
    element: <AuthGuard />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
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
        element: <GuestGuard />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/detail/:id",
            element: <DetailPage />,
          },

          {
            path: "/category/home",
            element: <HomeCategoryPage />,
          },
          {
            path: "/category/work",
            element: <WorkCategoryPage />,
          },
          {
            path: "/category/personal",
            element: <PersonalCategoryPage />,
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
