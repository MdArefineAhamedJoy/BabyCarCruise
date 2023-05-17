import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const user = ''
  const nevItem = (
    <>
      <Link to='/'><li className="btn btn-ghost" >Home</li></Link>
      <li className="btn btn-ghost"> All Toys</li>
      {user && (
        <>
          <li className="btn btn-ghost"> My Toys</li>
          <li className="btn btn-ghost"> Add A Toy</li>
        </>
      )}
      <li className="btn btn-ghost"> Blogs</li>
      <Link to='/login'><li className="btn btn-ghost px-2">Login</li></Link>
      <Link to='/singup'><li className="btn btn-ghost">SingUp</li></Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  w-52"
            >
              {nevItem}
            </ul>
          </div>
          <a className="font-bold text-3xl">BabyCarCruise</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu  menu-horizontal px-1">{nevItem}</ul>
        </div>
        <div >Hello</div>
      </div>
    </div>
  );
};

export default NavBar;
