import {Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, styled} from '@mui/material'; 

export const SideMenu = styled(({...otherProps}) => <Drawer {...otherProps} />)`
position: relative; 
top: 20; 
`

export const AppList = styled(({...otherProps}) => <List {...otherProps} />)`
background-color: #f3f3f3;

`

export const AppListItem = styled(({...otherProps}) => <ListItem {...otherProps} />)`
background-color: #f3f3f3;

`

export const AppListButton = styled(({...otherProps}) => <ListItemButton {...otherProps} />)`
background-color: #f3f3f4;

`

export const AppListIcon = styled(({...otherProps}) => <ListItemIcon {...otherProps} />)`
color: red; 
`

export const AppListText = styled(({...otherProps}) => <ListItemText {...otherProps} />)`
color: red;
`