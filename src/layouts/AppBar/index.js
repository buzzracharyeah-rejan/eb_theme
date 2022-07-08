import React, { useContext } from 'react';
import { Tooltip, Avatar } from '@mui/material';

import {
  AppToolbar,
  BrandText,
  MenuWrapper,
  NavWrapper,
  ProfileButton,
  SideMenuToggleButton,
} from './AppBar.styles';
import ProfileMenu from './ProfileMenu';

import { Menu as MenuIcon } from '@mui/icons-material';

import { AppBarContext } from '../../context/AppBarContext';

const MuiAppBar = () => {
  const { anchorEl, handleClick, open, toggleSidebar } = useContext(AppBarContext);

  return (
    <>
      <NavWrapper elevation={4} position='static'>
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
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </ProfileButton>
            </Tooltip>
          </MenuWrapper>
          <ProfileMenu />
        </AppToolbar>
      </NavWrapper>
    </>
  );
};

export default MuiAppBar;
