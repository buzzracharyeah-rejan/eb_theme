import React, { useContext } from 'react';
import { Tooltip, Avatar } from '@mui/material';

import {
  AppToolbar,
  BrandText,
  MenuWrapper,
  NavWrapper,
  ProfileButton,
  SideMenuToggleButton,
  UserAvatar,
} from './AppBar.styles';
import ProfileMenu from './ProfileMenu';

import { Menu as MenuIcon, Settings } from '@mui/icons-material';

import { AppBarContext } from '../../context/AppBarContext';

const MuiAppBar = () => {
  const { anchorEl, handleClick, open, toggleSidebar } = useContext(AppBarContext);

  return (
    <NavWrapper elevation={2} position='static'>
    <AppToolbar>
      <SideMenuToggleButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 3 }}
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </SideMenuToggleButton>

      <BrandText variant='h6' component='div' sx={{ flexGrow: 1 }}>
        EB Theme
      </BrandText>

      <MenuWrapper>
        <Tooltip title='Account Settings'>
          <ProfileButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
          >
            <UserAvatar src='https://berrydashboard.io/static/media/user-round.13b5a31b.svg' />
            <Settings />
          </ProfileButton>
        </Tooltip>
      </MenuWrapper>
      <ProfileMenu />
    </AppToolbar>
  </NavWrapper>
  );
};

export default MuiAppBar;
