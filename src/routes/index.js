import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Signup from '../pages/Signup';
import BaseLayout from '../layouts';
import PageManagement from '../pages/PageManagement';
import AdminManagement from '../pages/AdminManagement';
import ErrorPage from '../pages/Error404';
import AppBarProvider from '../context/AppBarContext';

const AppRoutes = () => {
  // const {pathname} = useLocation();
  // const excludabeRoutes = ['/login', '/register', '/forgotPassword'];
  // const routeHit = excludabeRoutes.some(route => route === pathname)

  const BaseElement = () => {
    return (
      <AppBarProvider>
        <BaseLayout>
          <Dashboard />
        </BaseLayout>
      </AppBarProvider>
    );
  };

  return (
    <>
      <Routes>
        <Route path="dashboard" element={<BaseElement />}>
          <Route path="adminManagement" element={<AdminManagement />} />
        </Route>
        <Route path="pageManagement" element={<PageManagement />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
        <Route path="register" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
