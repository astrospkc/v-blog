import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import forest from "./forest.jpg";
import Footer from "./Footer";
import { url } from "../config/config";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { Route, Routes } from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <div className="flex flex-col  md:flex-row ">
        <div className="container flex flex-col w-full md:w-[50%] md:border-r-2 shadow-lg shadow-black">
          <img
            src={forest}
            className="object-cover  w-screen h-screen md:w-full overflow-hidden relative "
            style={{ opacity: 0.5 }}
          />

          {/* <Navbar /> */}
          <div
            className="flex justify-center items-center md:m-auto absolute left-[30%] md:left-0 top-0 m-4 "
            style={{ minHeight: "100vh" }}
          >
            <h1 className="text-white text-center text-4xl sm:text-3xl md:text-8xl font-bold">
              BLOG
            </h1>

            <button className="bg-blue-400 rounded-lg p-2 hover:cursor-pointer hover:bg-blue-600 shadow-md shadow-black text-xs md:text-lg">
              <Link to="/home">click here to see blogs</Link>
            </button>
          </div>

          {/* <Footer /> */}
        </div>
        <div className="md:w-[50%]">
          <Routes>
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default StartPage;
