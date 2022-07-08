import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingCartCheckout, Menu as MenuIcon} from '@mui/icons-material';
import { styled } from '@mui/system';


const LoginButton = styled(({...otherProps}) => <Button {...otherProps} />)`
background-color: #f3f3f3;
color: #000; 
padding: 4px 1rem;

:hover {
    color: #f3f4f5;
}
`


const Dashboard = () => {
  return (
    <>
      <AppBar elevation={4} position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 3 }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

          <LoginButton onClick={() => console.log('click me')}>Login</LoginButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Dashboard;
