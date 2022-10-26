import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout Success!");
        setUser({});
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>HOME</Link>
              </li>
              <li>
                <Link to={"/courses"}>COURSES</Link>
              </li>
              <li>
                <Link to={"/faq"}>FAQ</Link>
              </li>
              <li>
                <Link to={"/blog"}>BLOG</Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-xl font-bold text-rose-800"
          >
            <span
              className="lg:text-3xl md:text-3xl text-2xl tooltip tooltip-bottom tooltip-primary"
              data-tip="back to home"
            >
              E
            </span>
            -TUTOR
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold text-rose-800">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/courses"}>COURSES</Link>
            </li>
            <li>
              <Link to={"/faq"}>FAQ</Link>
            </li>
            <li>
              <Link to={"/blog"}>BLOG</Link>
            </li>
          </ul>
        </div>
        <label
          for="Toggle1"
          className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
        >
          <span className="relative">
            <input id="Toggle1" type="checkbox" className="hidden peer bg-base-200" />
            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400 peer-checked:bg-rose-200"></div>
            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
          </span>
        </label>    
        <div className="navbar-end">
          {user?.uid ? (
            <>
              {user?.photoURL ? (
                <div
                  className="tooltip tooltip-bottom tooltip-primary"
                  data-tip={user.displayName}
                >
                  <img
                    src={user.photoURL}
                    className="w-10 rounded-full"
                    alt="userImage"
                  />
                </div>
              ) : (
                <div
                  className="tooltip tooltip-bottom tooltip-primary"
                  data-tip={user.displayName}
                >
                  <HiOutlineUserCircle className="text-4xl" />
                </div>
              )}
              <HiOutlineLogout
                onClick={handleLogout}
                className="text-4xl ml-4 text-red-600"
              />
            </>
          ) : (
            <Link to={"login"} className="btn bg-rose-800 border-0">
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
