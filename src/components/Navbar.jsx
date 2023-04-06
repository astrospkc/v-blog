import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  function handleToggle() {
    // console.log("ToggleMenu");
    setToggleMenu((prev) => !prev);
  }

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <>
      <div className="flex justify-between items-center  mx-auto px-4   w-full  z-10 ">
        <div className="  lg:flex lg:justify-between lg:items-center">
          <div className="m-3 p-2 font-extrabold text-xs lg:text-xl text-cyan-800">
            <i className="fa-solid fa-blog"></i> V-Blog World
          </div>
        </div>

        <div>
          <ul
            className={
              toggleMenu
                ? "absolute min-h-screen lg:min-h-0  right-0 top-16 lg:top-0 bottom-0 lg:static lg:flex lg:flex-row  lg:items-center lg:gap-12 gap-6 px-2 "
                : "hidden " +
                  " min-h-[60vh] lg:min-h-0  right-0 top-[4.5rem] lg:top-0 bottom-0 lg:static lg:flex lg:flex-row  lg:items-center lg:gap-12 gap-6 px-2 "
            }
          >
            <li className=" text-black  text-sm  hover:text-yellow-300 lg:text-xl bg-slate-400 shadow-md shadow-black rounded-lg px-2">
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li className=" text-black  text-sm  hover:text-yellow-300 lg:text-xl bg-slate-400 shadow-md shadow-black rounded-lg px-2">
              <Link to="/about">About</Link>
            </li>
            <li className=" text-black  text-sm  hover:text-yellow-300 lg:text-xl bg-slate-400 shadow-md shadow-black rounded-lg px-2">
              <Link to="/blog">My Blog</Link>
            </li>
            {/* <li className=" text-white font-sans text-sm  hover:text-yellow-300 lg:text-xl ">
              <Link to="/vlog"> Vlog</Link>
            </li>
            <li className=" text-white font-sans text-sm  hover:text-yellow-300 lg:text-xl ">
              <Link to="/photography"> Photography</Link>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-row lg:items-center font-bold">
          <div className=" text-white font-sans text-sm  hover:text-yellow-300 lg:text-xl ">
            <Link to="/blog/add">
              {" "}
              <button className="bg-cyan-800 px-2 rounded-lg">AddBlog</button>
            </Link>
          </div>

          {!localStorage.getItem("token") ? (
            <div className="flex flex-row">
              <button className="  bg-gray-800 py-1 rounded-md text-xs lg:text-xl px-4 mx-2 hover:bg-blue-500 text-slate-200 ">
                <Link to="/signIn">Login</Link>
              </button>
              <button className="  bg-gray-800 py-1 rounded-md text-xs lg:text-xl px-4 mx-2 hover:bg-blue-500 text-slate-200 ">
                <Link to="/signUp">SignUp</Link>
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogOut}
              className="  bg-gray-800 py-1 rounded-md text-sm lg:text-xl px-4 mx-2 hover:bg-blue-500 text-slate-200 "
            >
              Logout
            </button>
          )}
          <div className="lg:hidden justify-self-start" onClick={handleToggle}>
            {!toggleMenu && (
              <div className="lg:hidden text-white">
                <BsList className="text-white" />
              </div>
            )}

            {toggleMenu && (
              <div className="lg:hidden text-white">
                <BsXLg />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
// BsPaletteFill
