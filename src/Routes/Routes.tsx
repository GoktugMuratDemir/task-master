import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import { Home } from "../Pages/Home";
import { DetailPage } from "../Pages/Detail";
import { NotFound404 } from "../Pages/NotFound404";
import { HomeCategoryPage } from "../Pages/Categories/Home";
import { WorkCategoryPage } from "../Pages/Categories/Work";
import { PersonalCategoryPage } from "../Pages/Categories/Personal";
import { LayoutMain } from "../Layouts/Main";


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
