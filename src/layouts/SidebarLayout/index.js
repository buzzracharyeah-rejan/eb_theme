import React from 'react';
import SidebarContextProvider from '../../context/SidebarContext';
import { Box } from '@mui/material';

import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import ModalContextProvider from '../../context/ModalContext';

const SidebarLayout = () => {
  return (
    <SidebarContextProvider>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <Sidebar />
          <Main />
     
      </Box>
    </SidebarContextProvider>
  );
};

export default SidebarLayout;
