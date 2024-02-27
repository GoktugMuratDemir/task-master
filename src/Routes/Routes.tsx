import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { LayoutMain } from "../Layouts/Main";
import { Home } from "../Pages/Home";
import { DetailPage } from "../Pages/Detail";
import { NotFound404 } from "../Pages/NotFound404";
import { None } from "../Pages/Categories/None";
import { WorkCategoriePage } from "../Pages/Categories/Work";
import { HomeCategoriePage } from "../Pages/Categories/Home";
import { PersonalCategoriePage } from "../Pages/Categories/Personal";



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
            path: "/categorie/none",
            element : <None />,
          },
          {
            path: "/categorie/home",
            element : <HomeCategoriePage />,
          },
          {
            path: "/categorie/work",
            element : <WorkCategoriePage />,
          },
          {
            path: "/categorie/personal",
            element : <PersonalCategoriePage />,
          }
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
