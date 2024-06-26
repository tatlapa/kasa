import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Store from "./pages/Store/Store.jsx";
import About from "./pages/About/About.jsx";
import "./main.scss";
import Error404 from "./pages/Error404/Error404.jsx";

const router = createBrowserRouter([
  {
    path: "/kasa",
    element: <Home />,
  },
  {
    path: "/kasa/store/:id",
    element: <Store />,
  },
  {
    path: "/kasa/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
