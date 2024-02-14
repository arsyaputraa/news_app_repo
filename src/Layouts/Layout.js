import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import ProviderWrapper from "../Providers";

const Layout = () => {
  return (
    <ProviderWrapper>
      <Navbar />
      <Outlet />
      {window.location.pathname === "/" && <Pagination />}
      <Footer />
    </ProviderWrapper>
  );
};

export default Layout;
