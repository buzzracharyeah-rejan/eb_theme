import { Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarContext } from '../../../context/SidebarContext';
import { MainWrapper } from './Main.styles';

const Main = () => {
  const { open } = useContext(SidebarContext);
  useEffect(() => {}, [open]);
  return (
    <MainWrapper open={open}>
      <Container maxWidth='xl' sx={{ background: '#fff', width: '100vw' }}>
        <Outlet />
      </Container>
    </MainWrapper>
  );
};

export default Main;
