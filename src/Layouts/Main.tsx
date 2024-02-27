import { Outlet } from "react-router-dom";
import { SideBarList } from "./SideBar/SideBarList";

export const LayoutMain = () => {
  return (
    <div className="mx-auto h-screen grid grid-cols-12">
      <div className="col-span-4 bg-gray-50 p-4 flex items-center justify-center ">
        <SideBarList />
      </div>
      <div className="col-span-8 bg-gray-200 p-4">
        <Outlet />
      </div>
    </div>
  );
};
