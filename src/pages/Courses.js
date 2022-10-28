import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import CourseCard from "./../components/CourseCard";

function Courses() {
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {}, []);

  const handleClick = (id) => {
    const categoryData = data.filter((item) => id === item.id);
  };

  return (
    <>
      <div className="mx-5 bg-gray-100 rounded-lg p-5 min-w-[80%]">
        <div className="grid grid-cols-2 gap-5">
          {data.map((item) => (
            <CourseCard item={item.courses} key={item.courses.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
