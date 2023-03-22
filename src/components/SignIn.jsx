import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { url } from "../config/config";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const url = "http://127.0.0.1:5000";
    const response = await fetch(url + "/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    if (jsonResponse.success) {
      //save the auth token
      localStorage.setItem("token", jsonResponse.authtoken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className="flex flex-col"
        style={{
          // backgroundImage: `url(${mountainImage})`,
          // backgroundColor: "black",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          backdropFilter: blur(),
        }}
      >
        <Navbar />
        <div className=" m-auto backdrop-blur-lg w-1/2  p-9">
          <h1 className="text-3xl font-bold text-slate-500 text-center">
            Login
          </h1>
          <form className=" w-96 flex flex-col " onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-white font-semibold my-5">
              Email Address:
            </label>

            <input
              type="text"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
            />
            <label htmlFor="password" className="text-white font-semibold my-5">
              Password:
            </label>

            <input
              type="text"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
            />
            {/* <label
              htmlFor="cpassword"
              className="text-white font-semibold my-5"
            >
              Confirm Password:
            </label>

            <input
              type="text"
              id="cpassword"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
            /> */}
            <button
              type="submit"
              className="text-white bg-[#3c7a89] m-3 rounded-lg p-1 hover:bg-blue-400"
            >
              Submit
            </button>
          </form>
          <div className="text-white"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
