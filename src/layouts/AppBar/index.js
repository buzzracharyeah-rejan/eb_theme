import React, { useContext } from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  Avatar,
  Menu,
  ListItemIcon,
  MenuItem,
  Divider,
} from '@mui/material';

import {
  ShoppingCartCheckout,
  Menu as MenuIcon,
  PersonAdd,
  Settings,
  Logout,
} from '@mui/icons-material';

import { styled } from '@mui/system';

import AppMenu from './Menu';
import { AppBarContext } from '../../context/AppContext';

const LoginButton = styled(({ ...otherProps }) => <Button {...otherProps} />)`
  background-color: #f3f3f3;
  color: #000;
  padding: 4px 1rem;

  :hover {
    color: #f3f4f5;
  }
`;

const WrapMenu = styled(({ ...otherProps }) => <Box {...otherProps} />)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MuiAppBar = () => {
  const { anchorEl, handleClick, open, toggleSidebar } = useContext(AppBarContext);

  return (
    <>
      <AppBar elevation={4} position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 3 }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            EB Theme
          </Typography>

          <WrapMenu>
            <Tooltip title='Account Settings'>
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </WrapMenu>
          <AppMenu />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MuiAppBar;
