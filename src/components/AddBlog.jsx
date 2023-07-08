import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteState";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AddBlog = () => {
  const context = useContext(NoteContext);
  const navigate = useNavigate();
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "" });
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(note);
    addNote(note.title, note.description);
    setNote({ title: "", description: "" });
    navigate("/blog");
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className=" h-screen  flex flex-col justify-center items-center w-full  mt-20">
        <h1 className="text-white text-center font-bold text-2xl py-2">
          Your Content
        </h1>

        <div className=" flex flex-col gap-5 flex-grow mx-5 ml-5 px-5  w-full md:px-16">
          <input
            name="title"
            id="title"
            className="bg-zinc-800 text-zinc-300 p-3 rounded-full outline-none focus:shadow-xl "
            placeholder="TITLE"
            style={{
              backgroundColor: "#61876E",
              fontSize: 19,
              color: "black",
            }}
            onChange={handleChange}
            value={note?.title || ""}
          />
          <textarea
            name="description"
            id="description"
            className="bg-zinc-800 text-white p-3 rounded-md  outline-none flex-grow focus:shadow-xl "
            style={{ backgroundColor: "#61876E", color: "black" }}
            placeholder="Description"
            onChange={handleChange}
            value={note?.description || ""}
          ></textarea>

          <div className="flex flex-row mb-5">
            <button
              onClick={handleClick}
              className="flex w-20 transform justify-center rounded-2xl border-b-4 border-gray-500 bg-gray-400 px-3 py-1  text-lg font-bold transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
            >
              Add
            </button>
          </div>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default AddBlog;
