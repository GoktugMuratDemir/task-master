import React, { useState } from "react";
import SideBarList from "./SideBar/SideBarList";
import { Outlet } from "react-router-dom";
import { LogoutButton } from "../../Components/LogoutButton";

export const DashboardLayoutMain = () => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <div className="mx-auto max-h-screen h-screen grid grid-cols-12 relative">
      {/* Sidebar */}
      <div
        className={`col-span-3 bg-gray-50 p-4 flex items-center justify-center max-md:${
          isOpenNav ? "flex col-span-full" : "hidden"
        }`}
      >
        <SideBarList />
        <div className="absolute bottom-5">
          <LogoutButton />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`col-span-9 max-h-screen h-screen overflow-auto bg-gray-200 p-4 max-md:col-span-full ${
          isOpenNav && "hidden"
        }`}
      >
        <Outlet />
      </div>

      {/* Toggle Button */}
      <div className="absolute top-5 left-5 hidden mt-auto max-md:block">
        <button onClick={toggleNav}>{isOpenNav ? "<" : "=>"}</button>
      </div>
    </div>
  );
};
