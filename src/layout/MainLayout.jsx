import React from "react";
import { Header } from "../components/header/Header";
import { Outlet } from "react-router-dom";


export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
