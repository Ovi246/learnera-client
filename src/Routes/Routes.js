import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import FeaturedCourses from "../pages/FeaturedCourses";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../Routes/PrivateRoute";
import Profile from "../pages/Profile";
import AuthPrevent from "./AuthPrevent";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomeScreen></HomeScreen>,
      },
      {
        path: "/register",
        element: (
          <AuthPrevent>
            <Register />
          </AuthPrevent>
        ),
      },
      {
        path: "/login",
        element: (
          <AuthPrevent>
            <Login />
          </AuthPrevent>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <FeaturedCourses></FeaturedCourses>,
    loader: async () => {
      const res = await fetch("http://localhost:5000/courses");
      return res.json();
    },
  },
]);
