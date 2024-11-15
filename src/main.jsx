import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ContextApiProvider from "./ContextApiProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextApiProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <ToastContainer position="top-center" />
    </ContextApiProvider>
  </StrictMode>
);
