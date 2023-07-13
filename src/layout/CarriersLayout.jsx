import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const CarriersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>

      <Outlet />
    </div>
  );
};

export default CarriersLayout;
