import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBarContext } from '../../context/AppBarContext';
import {
  AppList,
  AppListButton,
  AppListIcon,
  AppListItem,
  AppListText,
  BrandText,
  SideMenu,
  BrandIcon
} from './Drawer.styles';
import { Icon } from '@mui/material';

const ItemsList = [
  { icon: <InboxIcon />, text: 'Page Management', path: '/dashboard/pageManagement' },
  { icon: <MailIcon />, text: 'Admin Management', path: '/dashboard/adminManagement' },
];

const AppDrawer = () => {
  const { sidebarOpen } = useContext(AppBarContext);
  const navigate = useNavigate();
  return (
    <div sx={{ position: 'relative' }}>
      <SideMenu variant='persistent' anchor='right' open={sidebarOpen}>
        <BrandText variant='body1' component='p' gutterBottom={true} align='center'>
          <BrandIcon >
            <i className='fa-brands fa-raspberry-pi'></i>
          </BrandIcon>
          EB THEME
        </BrandText>
        <AppList>
          {ItemsList.map(({ icon, text, path }) => (
            <AppListItem key={text}>
              <AppListButton onClick={() => navigate(path)}>
                <AppListIcon>{icon}</AppListIcon>
                <AppListText primary={text} />
              </AppListButton>
            </AppListItem>
          ))}
        </AppList>
      </SideMenu>
    </div>
  );
};

export default AppDrawer;
