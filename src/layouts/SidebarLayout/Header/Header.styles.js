import styled from 'styled-components';
import {styled as muiStyled} from '@mui/material'; 
import { AppBar as MuiAppBar, Typography} from '@mui/material';

import { drawerWidth } from '../consts';


// ! THIS APPROACH DOES NOT WORK 
// export const AppBar = styled((...otherProps) => (
//   <MuiAppBar {...otherProps} />
// ))`
// position: absolute; 

// /* create transtion when appbar leaves the viewport  */
// transition: ${props => props.theme.transitions.create(['width, margin'], {
//   duration: props.theme.transitions.duration.leavingScreen,
//   easing: props.theme.transitions.easing.sharp,
// })}; 
// z-index: ${props => props.theme.zIndex.drawer} + 1;

// /* create transition when appbar enters the viewport */
// ${(props) => props.open & `
// transition: ${props => props.theme.transitions.create['marign', 'width'], {
//     duration: props.theme.transitions.duration.sharp, 
//     easing: props.theme.transitions.easing.enteringScreen

// }}`}; 
// width: calc(100% - ${drawerWidth}px);
// margin-left: ${drawerWidth}px;  
// `;


// export const AppBar = muiStyled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open"
//   })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen
//     }),
//     ...(open && {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen
//       })
//     })
//   }));

export const AppBar = styled((...otherProps) => <AppBar  {...otherProps}/>)`
background-color: #f3f3f3;
`; 


export const BrandText = styled((...otherProps) => (
    <Typography {...otherProps} />
))`
`; 
