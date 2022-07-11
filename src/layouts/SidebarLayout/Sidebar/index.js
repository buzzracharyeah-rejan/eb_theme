import React, { useContext } from 'react';
import { Divider, IconButton, Toolbar } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { Drawer, DrawerHeader } from './Sidebar.styles';
import ListItemCol from './ListItemCol';

/* get sidebar context  */
import { SidebarContext } from '../../../context/SidebarContext';

const Sidebar = () => {
  const { open, toggleSidebar } = useContext(SidebarContext);

  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DrawerHeader>
          <IconButton onClick={toggleSidebar}>{open && <ChevronLeftIcon />}</IconButton>
        </DrawerHeader>
      </Toolbar>
      <Divider />
      <ListItemCol open={open} />
    </Drawer>
  );
};

export default Sidebar;
