import React, { useState, createContext, useEffect } from "react";
import { RoleListType, RoleProps } from "./RoleType";
import { db } from "../Config/FireBase";
import { collection, getDocs, query } from "firebase/firestore";
import useAuth from "../Hooks/Auth/useAuth";
import { toast } from "react-toastify";

interface ChildrenProps {
  children: React.ReactNode;
}

export const RoleListContext = createContext<RoleListType | null>(null);

export const RoleListContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [roleList, setRoleList] = useState<RoleProps[]>([]);

  const authUser = useAuth();

  const userInfo = {
    userId: authUser?.uid || "",
    userEmail: authUser?.email || "",
  };

  const isAdminUser = roleList.some((role) => role.userId === authUser?.uid);

  // ** get taskList
  useEffect(() => {
    getRoleList();
  }, []);

  // ** get RoleList
  const getRoleList = async () => {
    const roleCollection = collection(db, "roles");
    const roleQuery = query(roleCollection);
    const querySnapshot = await getDocs(roleQuery);
    const newRoleList: RoleProps[] = [];
    querySnapshot.forEach((doc) => {
      newRoleList.push({ ...doc.data(), id: doc.id } as unknown as RoleProps);
    });
    setRoleList(newRoleList);
  };

  // ** Check Accessibility
  const isAccessibility = (taskUserId: string) =>
    isAdminUser || taskUserId === userInfo.userId;

  // ** Check Accessibility Permission and Display Toastify Message
  const isAccessibilityPermission = (taskUserId: string) => {
    if (isAccessibility(taskUserId)) {
      return true;
    } else {
      toast.error("You don't have permission to access this task!");
      return false;
    }
  };

  return (
    <RoleListContext.Provider
      value={{
        isAdminUser,
        userInfo,
        isAccessibility,
        isAccessibilityPermission,
      }}
    >
      {children}
    </RoleListContext.Provider>
  );
};
