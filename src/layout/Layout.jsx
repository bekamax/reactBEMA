import React from "react";
import Navbar from "../widgets/navbar/navbar";
import { Outlet } from "react-router-dom";
import MainRoutes from "../routes/MainRoutes";

const Layout = () => {
  return (
    <div>
      <Navbar />
      {/* <Outlet/> */}
      <MainRoutes />
    </div>
  );
};

export default Layout;
