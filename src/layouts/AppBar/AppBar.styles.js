import { styled, Button, Box, AppBar, Toolbar, IconButton, Typography, Avatar } from '@mui/material';

export const LoginButton = styled(({ ...otherProps }) => <Button {...otherProps} />)`
  background-color: #f3f3f3;
  color: #000;
  padding: 4px 1rem;

  :hover {
    color: #f3f4f5;
  }
`;

export const MenuWrapper = styled(({ ...otherProps }) => <Box {...otherProps} />)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavWrapper = styled(({ ...otherProps }) => <AppBar {...otherProps} />)`
max-width: 100vw; 
background-color: #fff;
color: #212121; 
font-family: 'Roboto', sans-serif;
height: 70px; 
`;

export const AppToolbar = styled(({ ...otherProps }) => <Toolbar {...otherProps} />)`
// border: 1rem; 

`;

export const SideMenuToggleButton = styled(({ ...otherProps }) => <IconButton {...otherProps} />)`
background: #e0f2f2; 
color: #61aaa3; 
border-radius: 4px; 
padding: 2px 4px;
margin-left: 1rem;

:hover {
  color: #fff;
  background-color: #26a59a; 
}
`;

export const BrandText = styled(({ ...otherProps }) => <Typography {...otherProps} />)`
font-weight: 600;
padding: 1rem;
font-size: 1.5rem;

`;

export const ProfileButton = styled(({ ...otherProps }) => <IconButton {...otherProps} />)`
padding: 8px 1rem;
background: #f3f3f3;
border-radius: 3rem; 
:hover {
  background-color: #546f7a; 
  color: #fff;
}
`;

export const UserAvatar = styled(({ ...otherProps }) => <Avatar {...otherProps} />)`
margin-right: 0.6rem;
`;