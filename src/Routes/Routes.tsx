import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { LayoutMain } from "../Layouts/Main";
import { Home } from "../Pages/Home";
import { DetailPage } from "../Pages/Detail";
import { NotFound404 } from "../Pages/NotFound404";
import { None } from "../Pages/Categories/None";
import { HomeCategoriePage } from "../Pages/Categories/Home";
import { ShoppingList } from "../Pages/Categories/Shopping-List";



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
            path: "/categorie/shopping-list",
            element : <ShoppingList />,
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
