import React from "react";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header title="RICK AND MORTY API" />
      <section className="section-shown">
        <Outlet />
        {/* Placeholder for the component that will be render depending on the route */}
      </section>
    </div>
  );
};

export default Layout;
