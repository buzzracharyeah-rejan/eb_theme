import { Drawer as MuiDrawer, Toolbar } from '@mui/material';
import { styled } from '@mui/material';

import { drawerWidth } from '../consts';

const openedMixin = ({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    duration: theme.transitions.duration.enteringScreen,
    easing: theme.transitions.easing.sharp,
  }),
});

const closedMixin = ({ theme }) => ({
  transition: theme.transitions.create(['width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

export const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  boxSizing: 'border-box',
  color: '#000',

  ...(open && {
    transition: theme.transitions.create(['margin', 'width'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    '& .MuiPaper-root': {
      transition: theme.transitions.create(['margin', 'width'], {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: drawerWidth,
    },
  }),
  ...(!open && {
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& .MuiPaper-root': {
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(9), 
      overflowX: 'hidden'
    },
  }),
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '1rem',
  width: '100%',
  marginLeft: '3rem',
  justifyContent: 'flex-end',
}));
