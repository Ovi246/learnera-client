import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import FeaturedCourses from "../pages/FeaturedCourses";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "../Routes/PrivateRoute";
import Profile from "../pages/Profile";
import AuthPrevent from "./AuthPrevent";
import Courses from "./../pages/Courses";
import Sidebar from "../components/Sidebar";
import CourseCategory from "../pages/CourseCategory";
import Nav from "./../components/Nav";
import CourseDetails from "./../pages/CourseDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
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
    index: true,
    element: (
      <>
        <HomeScreen />
        <FeaturedCourses />
      </>
    ),
    loader: async () => {
      const res = await fetch("http://localhost:5000/courses");
      return res.json();
    },
  },
  {
    path: "/courses",
    element: (
      <>
        <div className="container mx-auto px-48">
          <Nav />
        </div>
        <div className="container mx-auto">
          <Sidebar />
        </div>
      </>
    ),
    children: [
      {
        path: "/courses",
        element: <Courses />,
        loader: async () => {
          const res = await fetch("http://localhost:5000/courses");
          return res.json();
        },
      },
      {
        path: "/courses/:categoryId",
        element: <CourseCategory />,
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/courses/${params.categoryId}`
          );
          return res.json();
        },
      },
      {
        path: "/courses/:categoryId/:courseId",
        element: <CourseDetails />,
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/courses/${params.categoryId}/${params.courseId}`
          );
          return res.json();
        },
      },
    ],
    loader: async () => {
      const res = await fetch("http://localhost:5000/courses");
      return res.json();
    },
  },
]);
