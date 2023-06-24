import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-center mt-auto">
      <ul
        className="py-3  gap-6 ml-2 cursor-pointer md:flex md:justify-center text:lg md:text-2xl text-[#16262e] "
        style={{ color: "#A27B5C" }}
      >
        <li className=" hover:text-[#dbc2cf] flex gap-2 items-center">
          <FaGithubSquare />
          <h2 className="">Github</h2>
        </li>

        <li className=" hover:text-[#dbc2cf] flex gap-2 items-center">
          <FaFacebookSquare /> Facebook
        </li>
        <li className=" hover:text-[#dbc2cf] flex gap-2 items-center">
          <FaInstagramSquare />
          Instagram
        </li>
        <li className=" hover:text-[#dbc2cf] flex gap-2 items-center">
          <FaLinkedin /> LinkedIn
        </li>
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
