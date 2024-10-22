import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import HomeLayout from "../pages/HomeLayout/HomeLayout";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
    ],
  },
]);
