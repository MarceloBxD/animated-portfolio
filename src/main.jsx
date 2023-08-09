import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Projects } from "./routes/Projects/Projects.jsx";

import { Home } from "./routes/Home/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
