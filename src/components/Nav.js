import React from "react";
import { FaRegMoon } from "react-icons/fa";

function Nav() {
  return (
    <header className="flex justify-between py-14 items-center">
      <h1 className="text-3xl font-bold text-myblue">Learnera.</h1>
      <div>
        <a
          href="login"
          className="text-xl mx-5 text-sky-600 font-semibold hover:border-b-4 border-green-600"
        >
          Courses
        </a>
        <a
          href="login"
          className="text-xl text-sky-600 font-semibold hover:border-b-4 border-green-600"
        >
          FAQ
        </a>
        <a
          href="login"
          className="text-xl mx-5 text-sky-600 font-semibold hover:border-b-4 border-green-600"
        >
          Blog
        </a>
      </div>
      <div className="flex items-center">
        <FaRegMoon className="cursor-pointer" />
        <button className="mx-5 rounded-md bg-myblue px-2 py-1 text-white">
          Login
        </button>
        <img src="" alt="" />
      </div>
    </header>
  );
}

export default Nav;
