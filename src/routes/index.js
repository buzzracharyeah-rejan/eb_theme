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

const AppRoutes = () => {
  // const {pathname} = useLocation();
  // const excludabeRoutes = ['/login', '/register', '/forgotPassword'];
  // const routeHit = excludabeRoutes.some(route => route === pathname)

  return (
    <>
      <Routes>
        <Route
          path='dashboard'
          element={
            <BaseLayout>
              <Dashboard />
            </BaseLayout>
          }
        >
          <Route path='pageManagement' element={<PageManagement />} />
          <Route path='adminManagement' element={<AdminManagement />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='forgotPassword' element={<ForgotPassword />} />
        <Route path='register' element={<Signup />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
