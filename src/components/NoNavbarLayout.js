import React from "react";
import { Outlet } from "react-router-dom";

function NoNavbarLayout() {
  return (
    <div className="">
      {/* No navbar here */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default NoNavbarLayout;
