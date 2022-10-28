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
      <Link to="/">
        <h1 className="cursor-pointer text-3xl font-bold text-myblue">
          Learnera.
        </h1>
      </Link>
      <div>
        <Link to="/courses">
          <span className="text-md pb-1 mx-5 text-sky-600 font-semibold hover:border-b-4 border-green-600">
            Courses
          </span>
        </Link>
        <Link to="/faq">
          <span className="text-md pb-1 mx-5 text-sky-600 font-semibold hover:border-b-4 border-green-600">
            FAQ
          </span>
        </Link>
        <Link to="/blog">
          <span className="text-md pb-1 mx-5 text-sky-600 font-semibold hover:border-b-4 border-green-600">
            Blog
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        <FaRegMoon className="cursor-pointer" />
        {user ? (
          <>
            <Link to="/profile">
              <img
                src={user?.photoURL}
                alt=""
                title={user?.displayName}
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
