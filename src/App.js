import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HelloWorld />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
    </Routes>
  );
};

export default App;
