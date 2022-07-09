import React from 'react';
import Sidebar from './Drawer';

import AppBar from './AppBar';
import AppBarProvider from '../context/AppBarContext';
import { styled } from '@mui/material';

const BaseLayout = ({ children }) => {
  return (
    <AppBarProvider>
        <AppBar />
        <Sidebar />
        {children}
    </AppBarProvider>
  );
};

export default BaseLayout;
