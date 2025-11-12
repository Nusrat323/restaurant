
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MenuPage from "../pages/MenuPage";
import TeamDetails from "../pages/TeamDetails";
import Reservation from "../pages/Reservation";
import About from "../pages/About";
import ContactPage from "../components/ContactPage";
import Gallery from "../pages/Gallery";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/menu", element: <MenuPage /> },
  { path: "/reservation", element: <Reservation /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/team/:id", element: <TeamDetails /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

