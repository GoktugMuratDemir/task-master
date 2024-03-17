import React, { useState, createContext, useEffect } from "react";
import { RoleListType, RoleProps } from "./RoleType";
import { db } from "../Config/FireBase";
import { collection, getDocs, query } from "firebase/firestore";
import useAuth from "../Hooks/Auth/useAuth";

interface ChildrenProps {
  children: React.ReactNode;
}

export const RoleListContext = createContext<RoleListType | null>(null);

export const RoleListContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [roleList, setRoleList] = useState<RoleProps[]>([]);

  const authUser = useAuth();

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

  return (
    <RoleListContext.Provider
      value={{
        roleList,
        isAdminUser
      }}
    >
      {children}
    </RoleListContext.Provider>
  );
};
