import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Category_News from "../pages/Category_News/Category_News";
import Login from "../pages/Login/Login";
export const router = createBrowserRouter(
  [
    {
      path: "*",
      element: <h1>Error Hirock</h1>,
    },
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "",
          element: <Navigate to={"/category_news/0"}></Navigate>,
        },
        {
          path: "/category_news/:id",
          element: <Category_News />,
        },
      ],
    },
    {
      path:"/login",
      element:<Login/>
    }
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
    },
  }
);
