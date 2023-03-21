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
      <Navbar />
      <div className=" w-full bg-zinc-700 h-screen flex flex-col">
        <h1 className="text-white text-center font-bold text-2xl py-2">
          Your Content
        </h1>

        <div className=" flex flex-col gap-5  flex-grow mx-16">
          <input
            name="title"
            id="title"
            className="bg-zinc-800 text-zinc-300 p-3 rounded-full outline-none focus:shadow-xl "
            placeholder="TITLE"
            style={{ fontSize: 19 }}
            onChange={handleChange}
            value={note.title}
          />
          <textarea
            name="description"
            id="description"
            className="bg-zinc-800 text-white p-3 rounded-md  outline-none flex-grow focus:shadow-xl "
            placeholder="Description"
            onChange={handleChange}
            value={note.description}
          ></textarea>

          <div className="flex flex-row mb-5">
            <button
              onClick={handleClick}
              className="flex w-20 text-sm transform justify-center rounded-2xl border-b-4 border-gray-500 bg-gray-400 px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
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
