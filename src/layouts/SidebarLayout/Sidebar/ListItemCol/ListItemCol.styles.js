import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styled from 'styled-components';


export const MuiList = styled(({theme, ...otherProps}) => <List {...otherProps}/>)`
`


export const MuiListItem = styled(({theme, ...otherProps}) => <ListItem {...otherProps}/>)`
margin: 4px 0; 
padding: 2em 0;
`

export const MuiListItemButton = styled(({theme, ...otherProps}) => <ListItemButton {...otherProps}/>)`
`

export const MuiListItemIcon = styled(({theme, ...otherProps}) => <ListItemIcon {...otherProps}/>)`
padding: 2px 3px;
`

export const MuiListItemText = styled(({theme, ...otherProps}) => <ListItemText {...otherProps}/>)`
padding: 0 1em;
transition: all 0.5s ease; 
`