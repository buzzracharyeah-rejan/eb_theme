import React from 'react';
import { Container, Grid } from '@mui/material';

import HelloWorld from '../components/HelloWorld';
import Sidebar from './Drawer';
import AppBar from './AppBar';

import AppBarProvider from '../context/AppBarContext';
import { styled } from '@mui/material';
import { createTheme } from '@mui/material';

const BaseLayout = ({ children }) => {
  const theme = createTheme();
  return (
    <AppBarProvider>
      <AppBar />
      <Grid container>
        <Grid item md={3}>
          <Sidebar />
        </Grid>
        <Grid item xl={9}>
          <Container md={9} sx={{ background: '#f3f3f3' }}>
            <HelloWorld />
            {children}
          </Container>
        </Grid>
      </Grid>
    </AppBarProvider>
  );
};

export default BaseLayout;
