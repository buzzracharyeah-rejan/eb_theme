import React, {useState, useContext} from 'react'
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { AppBarContext } from '../../../context/AppContext';


const settings = [
    { icon: <Avatar size='small'/>, name: 'Profile' },
    { icon: <Avatar />, name: 'My Account' },
    { icon: <PersonAdd />, name: 'Add another account' },
    { icon: <Settings />, name: 'Settings' },
    { icon: <Logout />, name: 'Logout' },
  ];

const AppMenu = () => {
  const {anchorEl, handleClose, open} = useContext(AppBarContext)

  return (
    <Menu
    anchorEl={anchorEl}
    id='account-menu'
    open={open}
    onClose={handleClose}
    onClick={handleClose}
  >
    {settings.map((setting, index) => (
      <MenuItem key={`${setting.name}+${index}`}>
      <ListItemIcon>
        {setting.icon}
        {setting.name}
      </ListItemIcon>
      </MenuItem>
    ))}
  </Menu>
  )
}

export default AppMenu