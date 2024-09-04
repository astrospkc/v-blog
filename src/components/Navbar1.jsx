import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
// import { BsEyeFill } from "react-icons/bs";
// import { BsKeyFill } from "react-icons/bs";
// import { BsSendFill } from "react-icons/bs";
// import { BsPersonCircle } from "react-icons/bs";
// import { BsHouseDoorFill } from "react-icons/bs";
// import { BsFillPenFill } from "react-icons/bs";
// import { BsFillPaletteFill } from "react-icons/bs";

const Navbar1 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  function handleToggle() {
    console.log("ToggleMenu");
    setToggleMenu((prev) => !prev);
  }
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div
        className="md:hidden justify-self-start m-4  w-fit "
        onClick={handleToggle}
      >
        {!toggleMenu && (
          <div className="md:hidden text-white  ">
            <BsList className="text-black text-4xl bg-yellow-500 rounded-full p-2" />
          </div>
        )}

        {toggleMenu && (
          <div className="md:hidden text-white ">
            <BsXLg className="text-black text-4xl bg-yellow-500 rounded-full p-2" />
          </div>
        )}
      </div>
      <div
        className={
          toggleMenu
            ? " md:min-h-screen  text-white  md:flex justify-evenly items-center md:shadow-lg md:shadow-black backdrop-blur-lg  "
            : "hidden md:flex   text-white  justify-evenly items-center md:shadow-lg md:shadow-black  backdrop-blur-lg"
          // "w-2/3 md:min-h-screen md:border-r-2 p-3 text-white border-gray-600  md:flex justify-evenly items-center bg-red-300 "
        }
      >
        <ul
          className={
            toggleMenu
              ? " hover:text-yellow-500 flex flex-col mr-3 px-3 justify-center bg-gray-800  w-fit sticky"
              : "hidden " + "  md:flex flex-row mr-3 justify-center items-start"
          }

          // className=" hover:text-yellow-500 flex flex-col m-3 "
        >
          {toggleMenu ? (
            <>
              <li
                className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                onClick={handleToggle}
              >
                {/* {i.icon} */}
                <Link to="/">Home</Link>
              </li>
              <li
                className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                onClick={handleToggle}
              >
                {/* {i.icon} */}
                <Link to="/about">About</Link>
              </li>
              <li
                className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                onClick={handleToggle}
              >
                {/* {i.icon} */}
                <Link to="/blog">My Blog</Link>
              </li>
              <li
                className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                onClick={handleToggle}
              >
                {/* {i.icon} */}
                <Link to="/blog/add">Add Blog</Link>
              </li>
              {!localStorage.getItem("token") ? (
                <>
                  <li
                    className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                    onClick={handleToggle}
                  >
                    {/* {i.icon} */}
                    <Link to="/signIn">Login</Link>
                  </li>
                  <li
                    className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                    onClick={handleToggle}
                  >
                    {/* {i.icon} */}
                    <Link to="/signUp">SignUp</Link>
                  </li>
                </>
              ) : (
                <li
                  className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500 hover:cursor-pointer"
                  onClick={handleLogOut}
                >
                  Logout
                </li>
              )}
            </>
          ) : (
            <>
              <li className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500">
                {/* {i.icon} */}
                <Link to="/">Home</Link>
              </li>
              <li className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500">
                {/* {i.icon} */}
                <Link to="/about">About</Link>
              </li>
              <li className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500">
                {/* {i.icon} */}
                <Link to="/blog">My Blog</Link>
              </li>
              <li className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500">
                {/* {i.icon} */}
                <Link to="/blog/add">Add Blog</Link>
              </li>
              {!localStorage.getItem("token") ? (
                <>
                  <li className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500">
                    {/* {i.icon} */}
                    <Link to="/signIn">Login</Link>
                  </li>
                  <li className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500">
                    {/* {i.icon} */}
                    <Link to="/signUp">SignUp</Link>
                  </li>
                </>
              ) : (
                <li
                  className="flex flex-row m-4  text-white hover:cursor-pointer md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                  onClick={handleLogOut}
                >
                  {/* {i.icon} */}
                  Logout
                </li>
              )}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar1;
// className="flex flex-col md:flex-row  "
