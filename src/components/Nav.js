import React from "react";
import { useContext } from "react";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

function Nav() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <header className="flex justify-between py-14 items-center max-h-48 mb-14">
      <h1 className="text-3xl font-bold text-myblue">Learnera.</h1>
      <div>
        <a
          href="login"
          className="text-md pb-1 mx-5 text-sky-600 font-semibold hover:border-b-4 border-green-600"
        >
          Courses
        </a>
        <a
          href="login"
          className="text-md pb-1 text-sky-600 font-semibold hover:border-b-4 border-green-600"
        >
          FAQ
        </a>
        <a
          href="login"
          className="text-md pb-1 mx-5 text-sky-600 font-semibold hover:border-b-4 border-green-600"
        >
          Blog
        </a>
      </div>
      <div className="flex items-center">
        <FaRegMoon className="cursor-pointer" />
        {user?.uid ? (
          <>
            <Link to="/profile">
              <img
                src={user?.photoURL}
                alt=""
                className="w-[50px] h-[50px] rounded-full ml-5 cursor-pointer"
              />
            </Link>
            <button
              className="mx-5 rounded-md bg-myblue px-2 py-1 text-white"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="mx-5 rounded-md bg-myblue px-2 py-1 text-white">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Nav;
