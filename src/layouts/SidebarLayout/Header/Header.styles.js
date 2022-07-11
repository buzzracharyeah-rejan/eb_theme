import { AppBar as MuiAppBar, Toolbar as MuiToolbar } from '@mui/material';
import { styled } from '@mui/material';

import { drawerWidth } from '../consts';

const closedMixin = (theme) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

const openMixin = (theme) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

export const AppBar = styled(MuiAppBar)(({ theme, ...otherProps }) => ({
  zIndex: theme.zIndex.drawer + 1,
  ...closedMixin(theme),
  ...(otherProps.open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    ...openMixin(theme),
  }),
}));

export const Toolbar = styled(MuiToolbar)(({ theme, ...otherProps }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const MenuMapBrand = styled('div')(({ theme, ...otherProps }) => ({
  display: 'flex',
  background: '#f3f3f3',
}));

export const BrandWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
}));
