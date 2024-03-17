export interface RoleProps {
  role: string;
  userId: string;
}

export type RoleListType = {
  // roleList: RoleProps[];
  userInfo: {
    userId: string | undefined;
    userEmail: string | undefined;
  };
  isAdminUser: boolean;
  isAccessibility: (taskUserId: string) => boolean | undefined;
  isAccessibilityPermission: (taskUserId: string) => boolean | undefined;
  // setRoleList: React.Dispatch<React.SetStateAction<RoleProps[]>>;
  // getRoleList: () => void;
};
