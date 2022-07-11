import React, { useState, useContext } from 'react';
import { Badge, IconButton, AppBar as MuiAppBar, Typography, Toolbar } from '@mui/material';

import { AppBar, BrandText } from './Header.styles';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { SidebarContext } from '../../../context/SidebarContext';

const Header = () => {
  const { open, toggleSidebar } = useContext(SidebarContext);

  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={toggleSidebar} sx={{ mr: '24px', ...(open && { display: 'none' }) }}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='h1' align='center'>
          EB Theme
        </Typography>
        <IconButton>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
    //   <h1>appbar component</h1>
  );
};

export default Header;
