import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import HelloWorld from './components/HelloWorld';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 150, 136)',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<HelloWorld />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/register' element={<Signup />} /> 
      </Routes>
    </ThemeProvider>
  );
};

export default App;
