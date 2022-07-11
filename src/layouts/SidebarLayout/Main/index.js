import { Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { SidebarContext } from '../../../context/SidebarContext';
import { MainWrapper } from './Main.styles';
import AdminManagement from '../../../pages/AdminManagement';
const Main = () => {
  const { open } = useContext(SidebarContext);
  useEffect(() => {}, [open]);
  return (
    <MainWrapper open={open}>
      <Container maxWidth='xl' sx={{ background: '#fff', width: '100vw' }}>
        <Routes>
          <Route path='/dashboard/adminManagement' element={AdminManagement} />
        </Routes>
      </Container>
    </MainWrapper>
  );
};

export default Main;
