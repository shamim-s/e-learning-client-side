import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import { HiOutlineLogout, HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  const {user} = useContext(AuthContext);

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
                <Link to={'/'}>HOME</Link>
              </li>
              <li>
                <Link to={'/courses'}>COURSES</Link>
              </li>
              <li>
                <Link to={'/faq'}>FAQ</Link>
              </li>
              <li>
                <Link to={'/blog'}>BLOG</Link>
              </li>
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl font-bold text-rose-800"><span 
          className="lg:text-3xl md:text-3xl text-2xl tooltip tooltip-bottom tooltip-primary" data-tip="back to home">E</span>-TUTOR</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold text-rose-800">
            <li>
              <Link to={'/'}>HOME</Link>
            </li>
            <li>
              <Link to={'/courses'}>COURSES</Link>
            </li>
            <li>
              <Link to={'/faq'}>FAQ</Link>
            </li>
            <li>
              <Link to={'/blog'}>BLOG</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.uid ? <>
            {
              user?.photoURL ? <img src={user.photoURL} alt={user.displayName} /> :
              <div className="tooltip tooltip-bottom tooltip-primary" data-tip={user.displayName}><HiOutlineUserCircle className="text-4xl"/></div>
            }
            <HiOutlineLogout className="text-4xl ml-4 text-red-600"/>
            </>: 
            <Link to={'login'} className="btn bg-rose-800 border-0">LOGIN</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
