import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NoteContext } from "../context/NoteState";

const ShowModal = (props) => {
  //   const { title, handlechange, description, closeModal, refe, refo } = props;

  const location = useLocation();
  const { prop1 } = location.state;
  console.log("prop1", prop1);

  console.log(prop1.title);
  console.log(prop1.description);

  return (
    <>
      hi
      {/* <div
        className="fixed w-full bg-zinc-700 h-screen flex flex-col "
        ref={ref}
      >
        <div className=" flex flex-col gap-5 bg-zinc-800 flex-grow mx-16 my-16">
          <h1
            id="title"
            name="title"
            onChange={handleChange}
            value={note.title}
            className="text-center text-white text-3xl p-2 font-mono"
          >
            {note.title}
          </h1>
          <p
            name="description"
            id="description"
            onChange={handleChange}
            className=" text-white p-3 rounded-md font-mono outline-none flex-grow focus:shadow-xl "
          >
            {note.description}
          </p>
        </div>
        <div className="flex flex-row mb-5">
          <Link to="/home">
            <button
              onClick={closeOnlyModal}
              ref={refClose}
              className="flex w-20 text-sm transform justify-center rounded-2xl border-b-4 border-gray-500 bg-gray-400  px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
            >
              close
            </button>
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default ShowModal;
