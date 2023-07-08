import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NoteContext } from "../context/NoteState";
import { Link } from "react-router-dom";

const EditBlog = () => {
  console.log("he there I am edit");
  const location = useLocation();
  const data = location.state;
  console.log("edit data: ", data);

  // const { editNote } = useContext(NoteContext);
  // const ref = useRef(null);
  // const refClose = useRef(null);

  // console.log("note in edit: ", note.etitle, note.edescription);

  return (
    <>
      <div>
        <h1>{data.note.title}</h1>
        <p className="text-white">{data.note.description}</p>
      </div>

      {/* <div className=" top-[10%] m-2 ">
        <div
          className=" fixed flex w-fit flex-col  rounded-3xl "
          ref={ref}
          
        >
          <h1 className="text-black text-center font-bold text-2xl py-2">
            Your Content
          </h1>

          <div className=" flex flex-col gap-5  flex-grow  mx-6  ">
            <input
              name="etitle"
              id="etitle"
              className=" text-zinc-300 p-3 rounded-full outline-none focus:shadow-xl "
              placeholder="TITLE"
              style={{ fontSize: 19, backgroundColor: "#3F4E4F" }}
              onChange={handleChange}
              value={note.etitle}
            />
            <textarea
              name="edescription"
              id="edescription"
              className=" text-white p-3 rounded-md  outline-none flex-grow focus:shadow-xl "
              placeholder="Description"
              style={{ backgroundColor: "#3F4E4F" }}
              onChange={handleChange}
              value={note.edescription}
            ></textarea>

            <div className="flex flex-row mb-5">
              <button
                onClick={handleClick}
                onChange={updateNote}
                className="flex w-20 text-sm transform justify-center rounded-2xl  bg-[#16262e] px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
              >
                Edit
              </button>

              <button
                // onClick={closeModal}
                ref={refClose}
                className="flex w-20 text-sm transform justify-center rounded-2xl   bg-[#16262e]  px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
              >
                <Link to="/blog">Go back</Link>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default EditBlog;
