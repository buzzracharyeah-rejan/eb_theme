import React from 'react';
import Sidebar from './Drawer';

import AppBar from './AppBar';
import AppBarProvider from '../context/AppBarContext';
import { styled } from '@mui/material';

const LayoutWrapper = styled('div')`
`;

const BaseLayout = ({ children }) => {
  return (
    <AppBarProvider>
      <LayoutWrapper>
        <AppBar />
        <Sidebar />
        {children}
      </LayoutWrapper>
    </AppBarProvider>
  );
};

export default BaseLayout;
