export interface RoleProps {
    role: string;
    userId: string;
  }
  
  export type RoleListType = {
    roleList: RoleProps[];
    isAdminUser: boolean;
    // setRoleList: React.Dispatch<React.SetStateAction<RoleProps[]>>;
    // getRoleList: () => void;
  };