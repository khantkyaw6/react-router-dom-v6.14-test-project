import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const Root = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Welcome from React Router Dom v6.4 Testing.</h1>
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
        <BreadCrumb />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
