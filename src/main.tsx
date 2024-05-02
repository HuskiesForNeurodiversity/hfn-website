import Welcome from "./pages/Welcome";
import Events from "./pages/Events";
import Experience from "./pages/Experience";
import Resources from "./pages/Resources";
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
