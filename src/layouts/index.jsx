import React from 'react';
import { Container, Grid } from '@mui/material';

import HelloWorld from '../components/HelloWorld';
import Sidebar from './Drawer';
import AppBar from './AppBar';

import AppBarProvider from '../context/AppBarContext';
import { styled } from '@mui/material';

const BaseLayout = ({ children }) => {
  return (
    <AppBarProvider>
      <AppBar />
      <Grid container>
        <Sidebar />
        <Container sx={{ ml: '300px', background: '#f3f3f3', }}>
          <HelloWorld />
          {children}
        </Container>
      </Grid>
    </AppBarProvider>
  );
};

export default BaseLayout;
