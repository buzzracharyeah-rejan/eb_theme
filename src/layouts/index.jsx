import React from 'react';
import Sidebar from './SidebarLayout';
import { styled } from '@mui/system';

import AppBar from './AppBar';
import AppBarProvider from '../context/AppContext';

const BaseLayout = ({ children }) => {
  return (
    <>
      <AppBarProvider>
        <AppBar />
      </AppBarProvider>
      {children}
    </>
  );
};

export default BaseLayout;
