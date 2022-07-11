import React, { useContext } from 'react';
import { Container, Grid } from '@mui/material';

import HelloWorld from '../components/HelloWorld';
import Sidebar from './Drawer';
import AppBar from './AppBar';
import { AppBarContext } from '../context/AppBarContext';
import AppBarProvider from '../context/AppBarContext';
import { styled } from '@mui/material';
import { createTheme } from '@mui/material';

const BaseLayout = ({ children }) => {
  const theme = createTheme();
  const { sidebarOpen } = useContext(AppBarContext);
  return (
    <>
      <AppBar />
      <div>
        <Sidebar sidebarOpen={sidebarOpen} />

        <Container style={{ marginLeft: sidebarOpen ? 300 : 0 }}>
          <HelloWorld />
          {children}
        </Container>
      </div>
    </>
  );
};

export default BaseLayout;
