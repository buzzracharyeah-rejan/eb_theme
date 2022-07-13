import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppRoutes from './routes/index.js';


const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 150, 136)',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
