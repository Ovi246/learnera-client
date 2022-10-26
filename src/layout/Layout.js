import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
