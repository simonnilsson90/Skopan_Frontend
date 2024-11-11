import React from "react";
import MenuAppBar from '../components/MenuAppBar';

import { Outlet } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop';

// 

function RootLayout() {
  return (
 
    <div className=" bg-black">
        <ScrollToTop />
            <MenuAppBar />

      <main className="">
        <Outlet />
      </main>

    
    </div>
   
    
  );
}

export default RootLayout;
