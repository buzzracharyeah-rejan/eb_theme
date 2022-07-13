import { Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

/* context to be used by <Outlet />  */
import ModalContextProvider from '../../../context/ModalContext';
import EditorContextProvider from '../../../context/EditorContext'; 

import { SidebarContext } from '../../../context/SidebarContext';
import { MainWrapper } from './Main.styles';

const Main = () => {
  const { open } = useContext(SidebarContext);
  useEffect(() => {}, [open]);
  return (
    <MainWrapper open={open}>
      <Container maxWidth='xl' sx={{ background: '#fff', ...(!open && { mx: '5em' }) }}>
        <ModalContextProvider>
          <EditorContextProvider>
            <Outlet />
          </EditorContextProvider>
        </ModalContextProvider>
      </Container>
    </MainWrapper>
  );
};

export default Main;
