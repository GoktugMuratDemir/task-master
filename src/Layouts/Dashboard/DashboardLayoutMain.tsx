import React, { useContext, useState } from "react";
import SideBarList from "./SideBar/SideBarList";
import { Outlet } from "react-router-dom";
import { LogoutButton } from "../../Components/LogoutButton";
import { RoleListContext } from "../../Context/RoleListContext";
import { RoleListType } from "../../Context/RoleType";

export const DashboardLayoutMain = () => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  const { userInfo } = useContext(RoleListContext) as RoleListType;

  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <div className="mx-auto max-h-screen h-screen grid grid-cols-12 relative">
      {/* Sidebar */}
      <div
        className={`col-span-3 bg-gray-50 p-4 flex items-center justify-center ${
          isOpenNav ? "max-md:flex col-span-full" : "max-md:hidden"
        }`}
      >
        <div className="absolute top-5 bg-white text-center text-gray-700 p-3 rounded-md shadow-lg">
          <h1 className="font-bold text-2xl">Welcome</h1>
          <p className="text-lg">{userInfo.userEmail}</p>
        </div>
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
