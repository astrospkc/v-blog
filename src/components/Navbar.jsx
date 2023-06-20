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
      <div className="flex flex-col">
        <div className="  text-center ">
          <div className="m-3 p-2 font-extrabold text-xs md:text-xl text-cyan-800 bg-white rounded-full ">
            <i className="fa-solid fa-blog"></i> V-Blog
          </div>
        </div>
        <div
          className="flex flex-col h-0 md:h-screen justify-between items-center  mx-auto px-4   w-full  z-10 shadow-lg shadow-black relative "
          md:style={{ backgroundColor: "#20262E" }}
        >
          {/* making navbar to one side and blogs to one side */}
          <div className="md:hidden justify-self-start" onClick={handleToggle}>
            {!toggleMenu && (
              <div className="md:hidden  text-white">
                <BsList className="text-black rounded-full bg-yellow-600 " />
              </div>
            )}

            {toggleMenu && (
              <div className="md:hidden  text-white">
                <BsXLg className="text-black rounded-full bg-yellow-600 " />
              </div>
            )}
          </div>

          <div>
            <ul
              className={
                toggleMenu
                  ? " md:min-h-0  left-0  md:flex md:flex-col  md:items-center md:gap-12  px-2 bg-black md:bg-transparent rounded-lg"
                  : "hidden " +
                    "  md:min-h-0  left-0   md:flex md:flex-col md:items-center md:gap-12  px-2 bg-black md:bg-transparent rounded-lg"
              }
            >
              <li className="  text-sm  hover:text-yellow-300 md:text-xl text-white shadow-md shadow-black rounded-lg px-2">
                <Link className="" to="/home">
                  Home
                </Link>
              </li>
              <li className=" text-white text-sm  hover:text-yellow-300 md:text-xl  shadow-md shadow-black rounded-lg px-2">
                <Link to="/about">About</Link>
              </li>
              <li className=" text-white text-sm  hover:text-yellow-300 md:text-xl  shadow-md shadow-black rounded-lg px-2">
                <Link to="/blog">My Blog</Link>
              </li>
              <li>
                <div className="flex flex-col md:flex-col md:items-center font-bold">
                  <div className=" text-white font-sans text-sm  hover:text-yellow-300 md:text-xl ">
                    <Link to="/blog/add">
                      {" "}
                      <li className="text-white px-2 rounded-lg">AddBlog</li>
                    </Link>
                  </div>

                  {!localStorage.getItem("token") ? (
                    <div className="flex flex-col md:flex-col">
                      <li className="  bg-gray-800 py-1 rounded-md text-xs md:text-xl px-4 m-2 hover:bg-blue-500 text-slate-200 ">
                        <Link to="/">Login</Link>
                      </li>
                      <li className="  bg-gray-800 py-1 rounded-md text-xs md:text-xl px-4 m-2 hover:bg-blue-500 text-slate-200 ">
                        <Link to="/">SignUp</Link>
                      </li>
                    </div>
                  ) : (
                    <li
                      onClick={handleLogOut}
                      className="  bg-gray-800 py-1 rounded-md text-sm md:text-xl px-4 mx-2 hover:bg-blue-500 text-slate-200 "
                    >
                      Logout
                    </li>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
// BsPaletteFill
