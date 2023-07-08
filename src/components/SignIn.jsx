import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import { url } from "../config/config";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "member@gmail.com",
    password: "member",
  });
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
    console.log(jsonResponse);
    if (jsonResponse.success) {
      //save the auth token
      localStorage.setItem("token", jsonResponse.authtoken);
      navigate("/home");

      console.log("why there is  /home");
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
          minHeight: "100vh",
        }}
      >
        <div
          className=" m-auto backdrop-blur-lg   p-9 rounded-xl shadow-lg shadow-black"
          style={{ backgroundColor: "#3F4E4F" }}
        >
          <h1 className="text-3xl font-bold text-white text-center">Login</h1>
          <form className="  flex flex-col " onSubmit={handleSubmit}>
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
              className="text-white bg-[#3c7a89] m-3 rounded-full px-4 p-1 hover:bg-blue-400 w-fit mx-auto"
            >
              Submit
            </button>
            <h1 className="text-white">
              Don't have an account? Signup by clicking{" "}
              <span className="bg-white text-black font-semibold p-1 rounded-full px-3">
                <Link to="/">SignUp</Link>
              </span>
            </h1>
          </form>
          <div className="text-white"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
