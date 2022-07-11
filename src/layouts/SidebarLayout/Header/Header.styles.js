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

const closedMixin = (theme) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
})
})

const openMixin = theme => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
})

export const AppBar = styled(MuiAppBar)(({ theme, ...otherProps }) => ({
  zIndex: theme.zIndex.drawer + 1,
  ...closedMixin(theme), 
  ...(otherProps.open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    ...openMixin(theme)
  }),
}))
