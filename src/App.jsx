import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./layout/Root";
import Help from "./pages/Help";
import Faq from "./sub_pages/Faq";
import ContactUs from "./sub_pages/ContactUs";
import NotFound from "./pages/NotFound";
import CarriersLayout from "./layout/CarriersLayout";
import Careers from "./pages/careers/Careers";
import { careersLoader } from "./pages/careers/Careers";
import CareerDetail from "./pages/careers/CareerDetail";
import { careerDetailLoader } from "./pages/careers/CareerDetail";
import CareerError from "./pages/careers/CareerError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <Help />,
        children: [
          { path: "faq", element: <Faq /> },
          {
            path: "contact",
            element: <ContactUs />,
          },
        ],
      },
      {
        path: "careers",
        element: <CarriersLayout />,
        errorElement: <CareerError />,
        children: [
          {
            index: true,
            loader: careersLoader,
            element: <Careers />,
          },
          {
            path: ":id",
            loader: careerDetailLoader,
            element: <CareerDetail />,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
