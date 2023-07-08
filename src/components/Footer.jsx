import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-center mt-auto">
      <ul
        className="py-3  gap-6 ml-2 cursor-pointer md:flex md:justify-center text:lg md:text-2xl text-[#16262e] "
        style={{ color: "#A27B5C" }}
      >
        <Link to="https://github.com/astrospkc">
          <li className=" hover:text-[#dbc2cf] flex gap-2 items-center">
            <FaGithubSquare />
            <h2 className="">Github</h2>
          </li>
        </Link>

        <li className=" hover:text-[#dbc2cf] flex gap-2 items-center">
          <FaInstagramSquare />
          Instagram
        </li>
        <Link to="https://www.linkedin.com/in/punam-kumari-2018951b6/">
          <li className=" hover:text-[#dbc2cf] flex gap-2 items-center">
            <FaLinkedin /> LinkedIn
          </li>
        </Link>
      </ul>

      <div>
        <p className="pt-3  text-[#3c7a89] text-center ">
          © 2023 Web development
        </p>
      </div>
    </footer>
  );
};

export default Footer;
