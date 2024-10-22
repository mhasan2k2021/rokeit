import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./pages/Main/Main.jsx";
import { RouterProvider } from "react-router-dom";
import { route } from "./Route/Route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route}>
      <Main />
    </RouterProvider>
  </StrictMode>
);
