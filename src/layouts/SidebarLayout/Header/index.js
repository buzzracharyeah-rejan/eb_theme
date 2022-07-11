import React, { useState, useContext } from 'react';
import { Badge, IconButton, AppBar as MuiAppBar, Typography, Toolbar } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import {AppBar, Drawer} from './Header.styles'; 
import { SidebarContext } from '../../../context/SidebarContext';

const drawerWidth = 240;


const Header = () => {
  const { open, toggleSidebar } = useContext(SidebarContext);

  return (
    <AppBar open={open} position='absolute' elevation={0}>
      <Toolbar>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='h1'>EBTHEME</Typography>
        <IconButton>
          <NotificationsIcon /> 
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
