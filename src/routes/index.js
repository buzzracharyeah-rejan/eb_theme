import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* Import Base Layout */
import Layout from '../layouts/SidebarLayout';

import HelloWorld from '../components/HelloWorld';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Signup from '../pages/Signup';
import AdminManagement from '../pages/AdminManagement';
import Error404 from '../pages/ErrorPage/Error404';
import PageManagement from '../pages/pageManagement';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='admin' element={<AdminManagement />} />
        <Route path='page' element={<PageManagement />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='forgotPassword' element={<ForgotPassword />} />
      <Route path='register' element={<Signup />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
