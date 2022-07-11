import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
  Icon,
} from '@mui/material';
import styled from 'styled-components'; 

export const SideMenu = styled(({ ...otherProps }) => <Drawer {...otherProps} />)`
z-index: 1;
`;

export const AppList = styled(({ ...otherProps }) => <List {...otherProps} />)`
`;

export const AppListItem = styled(({ ...otherProps }) => <ListItem {...otherProps} />)`
`;

export const AppListButton = styled(({ ...otherProps }) => <ListItemButton {...otherProps} />)`
  padding: 8px 1rem;
  background: #fefefe;
  color: #777779;
  border-radius: 10px;
  :hover {
    background-color: #e0f2f2;
    color: #26a59a;
  }
`;

export const AppListIcon = styled(({ ...otherProps }) => <ListItemIcon {...otherProps} />)`
padding: 0 0.8rem;
`;

export const AppListText = styled(({ ...otherProps }) => <ListItemText {...otherProps} />)`
   ;
`;

export const BrandText = styled(Typography)`
  fontweight: 600;
  color: #000;
`;

export const BrandIcon = styled(({ ...otherProps }) => <Icon {...otherProps} />)`
height: 2.5rem; 
transform: translateY(40%); 
margin-right: 0.3rem;
color: #26a59a; 

`;

