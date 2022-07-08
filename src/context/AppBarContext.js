import React, { useState, createContext } from 'react';

export const AppBarContext = createContext(null);

const AppBarProvider = ({ children }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); 

  /* set open to true if element exists */
  const open = Boolean(anchorEl);

  const toggleSidebar = () => {
    console.log(`sidebar toggle ${sidebarOpen}`)
    setSidebarOpen(!sidebarOpen); 
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarContext.Provider value={{ anchorEl, setAnchorEl, handleClick, handleClose, open, sidebarOpen, toggleSidebar}}>
      {children}
    </AppBarContext.Provider>
  );
};

export default AppBarProvider;
