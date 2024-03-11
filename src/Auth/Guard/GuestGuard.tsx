import React from 'react';
import { Navigate } from 'react-router-dom';

import { DashboardLayoutMain } from '../../Layouts/Dashboard/DashboardLayoutMain';
import useAuth from '../../Hooks/Auth/useAuth';

export const GuestGuard: React.FC = () => {
  const authUser = useAuth();

  if (!authUser) {
    return <Navigate to="/auth/login" />; 
  }

  return <DashboardLayoutMain />;
};
