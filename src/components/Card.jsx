import React, { useContext } from "react";
import { FiTrash2 } from "react-icons/fi";
import { BsFillPenFill } from "react-icons/bs";

import { NoteContext } from "../context/NoteState";
import { Link } from "react-router-dom";

// import { IconContext } from "react-icons";
const MAX_LENGTH = 100;

const Card = (props) => {
  const { deleteNote } = useContext(NoteContext);
  const { note, updatenote, handlechange } = props;

  console.log("note: ", note, note._id);

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
              backgroundColor: "#A27B5C",
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
                  // style={{ fontFamily: "Ubuntu" }}
                  className="singleline text-3xl   font-semibold font-serif mb-3 cursor-pointer text-black"
                >
                  {note.title}
                </h1>
              </div>
              <hr className="border-black" />
              <div className=" ">
                <p className="multiline desc text-white overflow-ellipsis overflow-hidden">
                  {note.description}
                </p>

                <button
                  onClick={() => {
                    updatenote(note);
                  }}
                  style={{ backgroundColor: "#3F4E4F", color: "white" }}
                  className="p-1 rounded-xl mt-3"
                >
                  <Link to="/blog/read" state={{ note }}>
                    read more
                  </Link>
                </button>
              </div>

              <div className="flex flex-row gap-3 mt-4 text-[20px] items-center ">
                <FiTrash2
                  className="  text-[#1a3339] hover:cursor-pointer hover:text-[#9fa2b2]"
                  onClick={() => {
                    deleteNote(note._id);
                  }}
                />
                <button
                  onClick={() => {
                    updatenote(note);
                  }}
                  className="flex flex-row items-center border-2 border-gray-700 rounded-full px-1"
                  style={{ backgroundColor: "#3F4E4F", color: "white" }}
                >
                  <BsFillPenFill className="text-sm" />
                  <Link to="/blog/edit" state={{ note }}>
                    edit
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
