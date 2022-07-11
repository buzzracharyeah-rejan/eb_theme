import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';

export const drawerWidth = 240;

export const ItemList = [
  {
    id: 0,
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon /> 
  },
  {
    id: 1,
    label: 'Page',
    path: '/dashboard/page',
    icon: <ArticleIcon />
  },
  {
    id: 2,
    label: 'Admin',
    path: '/dashboard/admin',
    icon: <GroupIcon />
  },
];
