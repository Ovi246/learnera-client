import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import FeaturedCourses from "../pages/FeaturedCourses";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout></Layout>
        <FeaturedCourses></FeaturedCourses>
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomeScreen></HomeScreen>,
      },
    ],
    loader: async () => {
      const res = await fetch("http://localhost:5000/courses");
      return res.json();
    },
  },
]);
