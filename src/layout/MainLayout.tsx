import { Toaster } from "@/components/ui/toaster";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* <AsideBar /> */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
