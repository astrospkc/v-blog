// import React, { useState, useEffect } from "react";
// import "../App.css";
// import { Link } from "react-router-dom";
// import { BsList } from "react-icons/bs";
// import { BsXLg } from "react-icons/bs";

// import { useNavigate } from "react-router-dom";
// const Navbar1 = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const navigate = useNavigate();

//   function handleToggle() {
//     // console.log("ToggleMenu");
//     setToggleMenu((prev) => !prev);
//   }

//   const handleLogOut = () => {
//     localStorage.removeItem("token");
//     navigate("/signin");
//   };

//   return (
//     <>
//       <div className="flex flex-col md:flex-row justify-evenly">
//         <button>click</button>
//         <ul
//           className={
//             toggleMenu
//               ? " md:min-h-0  left-0  md:flex md:flex-col  md:items-center  md:gap-10 px-2 bg-black md:bg-transparent rounded-lg"
//               : "hidden " +
//                 "  md:min-h-0  left-0   md:flex md:flex-row md:items-center  md:gap-10  px-2 bg-black md:bg-transparent "
//           }
//         >
//           {/* <ul className="flex flex-row "> */}
//           <li className="  text-sm  hover:text-yellow-300 md:text-xl text-white mb-3 md:shadow-md md:shadow-black rounded-lg px-2 h-fit">
//             <Link to="/">Home</Link>
//           </li>
//           <li className=" text-white text-sm  hover:text-yellow-300 md:text-xl mb-3  md:shadow-md md:shadow-black rounded-lg px-2 h-fit">
//             <Link to="/about">About</Link>
//           </li>
//           <li className=" text-white text-sm  hover:text-yellow-300 md:text-xl mb-3 md:shadow-md md:shadow-black rounded-lg px-2 h-fit">
//             <Link to="/blog">My Blog</Link>
//           </li>

//           <li className="text-white text-sm  hover:text-yellow-300 md:text-xl mb-3 md:shadow-md md:shadow-black rounded-lg px-2 h-fit">
//             <Link to="/blog/add"> AddBlog</Link>
//           </li>

//           {!localStorage.getItem("token") ? (
//             // <div className="flex flex-col md:flex-row w-fit">
//             <li>
//               <li className="  text-white text-sm  hover:text-yellow-300 md:text-xl mb-3 md:shadow-md md:shadow-black rounded-lg px-2 md:mb-12 ">
//                 <Link to="/signIn">Login</Link>
//               </li>
//               <li className="  text-white text-sm  hover:text-yellow-300 md:text-xl mb-3 md:shadow-md md:shadow-black rounded-lg px-2 md:mb-12 ">
//                 <Link to="/signUp">SignUp</Link>
//               </li>
//             </li>
//           ) : (
//             // <div className="flex flex-col md:flex-row w-fit">
//             <li
//               onClick={handleLogOut}
//               className="  text-white text-sm  hover:text-yellow-300 md:text-xl md:shadow-md md:shadow-black rounded-lg px-2 hover:cursor-pointer"
//             >
//               Logout
//             </li>
//             // </div>
//           )}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar1;
// // BsPaletteFill

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { BsKeyFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsFillPenFill } from "react-icons/bs";
import { BsFillPaletteFill } from "react-icons/bs";

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
                  className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
                  onClick={handleLogOut}
                >
                  {/* {i.icon} */}
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
                  className="flex flex-row m-4  text-white md:text-white font-bold px-3 md:border-b-0 border-gray-800 hover:text-yellow-500"
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
