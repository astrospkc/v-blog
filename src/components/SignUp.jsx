import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { url } from "../config/config";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "Durden",
    email: "Durdy@gmail.com",
    password: "34873akjhfk@",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${url}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,

        email: credentials.email,
        password: credentials.password,
      }),
    });
    console.log("response", response);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
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
      <div className=" flex flex-col justify-center items-center">
        <div
          className="m-20 backdrop-blur-lg  p-3 lg:p-9 shadow-lg shadow-black rounded-xl text-xs md:text-lg  border-r-2 border-gray-700 w-fit flex flex-col "
          // style={{ backgroundColor: "#3F4E4F" }}
        >
          <h1 className="text-3xl text-center text-white ">SignUp</h1>
          <form className="  flex flex-col  " onSubmit={handleSubmit}>
            <label htmlFor="fname" className="text-white mb-2 ">
              Name:
            </label>

            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={credentials.name}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
            />

            <label htmlFor="email" className="text-white mt-4">
              Email Address:
            </label>

            <input
              type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={credentials.email}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
            />
            <label htmlFor="password" className="text-white mt-4">
              Password:
            </label>

            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={credentials.password}
              className="h-8 rounded-lg outline-none bg-transparent border-b-2 border-white text-white px-3"
              minLength={5}
              required
            />

            <button
              type="submit"
              className="text-black bg-cyan-500 m-3 rounded-full p-1 px-10 hover:bg-blue-400 w-fit mx-auto"
            >
              Submit
            </button>
            <h1 className="text-white">
              Already have an account? Login by clicking{" "}
              <span className="bg-white text-black font-semibold pb-1 rounded-full px-3">
                <Link to="/signIn">Login</Link>
              </span>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
