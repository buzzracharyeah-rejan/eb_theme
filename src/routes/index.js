import React from 'react';
import { Route, Routes } from 'react-router-dom';

/* Import Base Layout */
import Layout from '../layouts/SidebarLayout';

import HelloWorld from '../components/HelloWorld';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Signup from '../pages/Signup';
import AdminManagement from '../pages/AdminManagement';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HelloWorld />} />
      <Route path='/dashboard/*' element={<Layout />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
      <Route path='/register' element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
