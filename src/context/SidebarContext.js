import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const SidebarContext = createContext(false);

const SidebarContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>{children}</SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
