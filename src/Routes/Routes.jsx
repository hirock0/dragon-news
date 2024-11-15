import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Category_News from "../pages/Category_News/Category_News";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "./PrivateRoute";
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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/news/details/:id",
      element: <PrivateRoute><NewsDetails/></PrivateRoute>
    },
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
