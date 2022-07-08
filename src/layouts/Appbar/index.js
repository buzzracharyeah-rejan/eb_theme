import React, { useState } from 'react';
import { MenuItem } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './Appbar.styles';
import { MainMenu } from './Appbar.styles';

const MuiAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <MainMenu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </MainMenu>
    </div>
  );
};

export default MuiAppBar;
