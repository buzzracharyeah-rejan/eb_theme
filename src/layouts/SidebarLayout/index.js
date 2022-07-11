import React from 'react';
import { createTheme, ThemeProvider } from '@mui/system';
import SidebarContextProvider from '../../context/SidebarContext';

import Sidebar from './Sidebar';
import Header from './Header';

const SidebarLayout = () => {
  const theme = createTheme();

  return (
    <SidebarContextProvider>
        <Header />
        <Sidebar />
    </SidebarContextProvider>
  );
};

export default SidebarLayout;
