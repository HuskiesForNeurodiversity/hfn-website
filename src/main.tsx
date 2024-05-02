import Welcome from "./pages/Welcome";
import Events from "./pages/Events";
import Experience from "./pages/Experience";
import Resources from "./pages/Resources";
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/style.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/hfn-website",
    element: <Welcome />,
  },
  {
    path: "/hfn-website/welcome",
    element: <Welcome />,
  },
  {
    path: "/hfn-website/events",
    element: <Events />,
  },
  {
    path: "/hfn-website/experience",
    element: <Experience />,
  },
  {
    path: "/hfn-website/resources",
    element: <Resources />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
