import { styled, Button, Box, AppBar, Toolbar, IconButton, Typography } from '@mui/material';

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

export const NavWrapper = styled(({ ...otherProps }) => <AppBar {...otherProps} />)``;

export const AppToolbar = styled(({ ...otherProps }) => <Toolbar {...otherProps} />)``;

export const SideMenuToggleButton = styled(({ ...otherProps }) => <IconButton {...otherProps} />)``;

export const BrandText = styled(({ ...otherProps }) => <Typography {...otherProps} />)``;

export const ProfileButton = styled(({ ...otherProps }) => <IconButton {...otherProps} />)``;
