// src/routes/config.js
import Body from "../components/Body"; // This will be the default home component
import About from "../components/About"; // The About component
import Contact from "../components/Contact"; // The Contact component
import RestaurantMenu from "../components/RestaurantMenu";
import { lazy, Suspense } from "react";
import Shimmer from "../components/Shimmer";

const Grocery = lazy(() => import("../components/Grocery"));

const config = [
  {
    path: "/", // Main path
    element: <Body />, // Default element when navigating to "/"
  },
  {
    path: "about", // Route for About page
    element: <About />, // Render About component for "/about"
  },
  {
    path: "contact", // Route for Contact page
    element: <Contact />, // Render Contact component for "/contact"
  },
  {
    path: "restaurants/:resId",
    element: <RestaurantMenu />,
  },
  {
    path: "grocery",
    element: (
      <Suspense fallback={<Shimmer />}>
        <Grocery />
      </Suspense>
    ),
  },
];

export default config;
