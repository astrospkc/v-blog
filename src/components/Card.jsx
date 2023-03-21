import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { BsFillPenFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AddBlog from "./AddBlog";
import { NoteContext } from "../context/NoteState";

// import { IconContext } from "react-icons";
const MAX_LENGTH = 100;

const Card = (props) => {
  const { deleteNote } = useContext(NoteContext);
  const { note, updateNote, setShowModal, setShowOnlyModal } = props;
  // console.log(note.title);
  return (
    <>
      {/* <AddBlog /> */}
      <div className="bg-transparent  rounded-md relative hover:cursor-pointer ">
        <div className="flex flex-col   w-full ">
          {/* left section  */}
          <div
            className=" flex flex-col shadow-lg h-fit shadow-black rounded-lg  "
            style={{
              // backgroundImage: `url(${white_space})`,
              backgroundColor: "#dbc2cf",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "20vh ",
              backdropFilter: blur(),
            }}
          >
            <div className=" mx-5 my-5 p-3 flex flex-col items-center justify-center ">
              <div className="">
                <h1
                  style={{ fontFamily: "Ubuntu" }}
                  className="singleline text-3xl  font-semibold font-serif mb-3 cursor-pointer"
                >
                  {note.title}
                </h1>
              </div>
              <hr className="border-black" />
              <div className=" ">
                <p className="multiline desc text-[#003566] overflow-ellipsis overflow-hidden">
                  {note.description}
                </p>
                <div
                  onClick={() => {
                    setShowOnlyModal(true);
                    updateNote(note);
                  }}
                >
                  <a
                    href=""
                    className=" text-slate-800 hover:text-blue-500 underline decoration-sky-500"
                  >
                    Read more
                  </a>
                </div>
              </div>

              <div className="flex flex-row-reverse gap-3 mt-9 text-[20px]  ">
                <FiTrash2
                  className="  text-[#3c7a89]  hover:cursor-pointer hover:text-[#9fa2b2]"
                  onClick={() => {
                    deleteNote(note._id);
                  }}
                />

                <BsFillPenFill
                  className="  text-[#3c7a89] hover:cursor-pointer hover:text-[#9fa2b2]"
                  // onClick={() => {
                  //   // updateNote(note);
                  //   closeModal
                  // }}
                  onClick={() => {
                    setShowModal(true);
                    updateNote(note);
                  }}
                />
              </div>
            </div>
          </div>
          {/* right section */}

          {/* <div className="text-white flex flex-col gap-6 ml-2 cursor-pointer text-2xl mt-auto absolute lg:relative">
            <FaGithubSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaLinkedin />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Card;
