import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import { ToastContainer } from "react-toastify";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./provider/AuthProvider";
import Route from "./routes/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
