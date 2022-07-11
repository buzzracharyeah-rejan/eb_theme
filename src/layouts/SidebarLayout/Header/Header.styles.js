import {
  Badge,
  IconButton,
  AppBar as MuiAppBar,
  Typography,
  Toolbar,
  Drawer as MuiDrawer,
} from '@mui/material';
import { styled } from '@mui/material';

import { drawerWidth } from '../consts';

export const AppBar = styled(MuiAppBar)(({ theme, ...otherProps }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(otherProps.open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
