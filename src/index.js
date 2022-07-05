import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import App from './App';

// CSS Import 
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>
);
