import React from 'react';
import SidebarContextProvider from '../../context/SidebarContext';

import Sidebar from './Sidebar';
import Header from './Header';

const SidebarLayout = () => {
  console.log('sidebar layout')

  return (
    <SidebarContextProvider>
        <Header />
        <Sidebar />
        {/* <h1>sidebar layout</h1> */}
    </SidebarContextProvider>
  );
};

export default SidebarLayout;
