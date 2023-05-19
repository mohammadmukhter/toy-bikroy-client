import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import Route from "./routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
