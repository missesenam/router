import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RoutLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RoutLayout;
