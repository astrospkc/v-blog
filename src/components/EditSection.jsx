import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteState";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const EditSection = () => {
  const context = useContext(NoteContext);
  const navigate = useNavigate();

  const { addNote, editNote } = context;
  console.log(editNote());

  const location = useLocation();
  const data = location.state;
  console.log("data: new ", data);
  const id = data.note._id;
  const titleEdit = data.note.title;
  const descEdit = data.note.description;
  console.log("id title dsc for edit");
  console.log("id: ", id, "title: ", titleEdit, "desc: ", descEdit);
  const [note, setNote] = useState({
    _id: { id },
    title: { titleEdit },
    description: { descEdit },
  });

  console.log("note is edit page: ", note);
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(note);

    editNote(note.title, note.description);
    setNote({
      _id: note._id,
      title: note.title,
      description: note.description,
    });
    // navigate("/blog/edit");
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  console.log(note.title.titleEdit);
  return (
    <>
      <div className="   h-screen  flex flex-col justify-center items-center w-full  mt-20">
        <h1 className="text-white text-center font-bold text-2xl py-2">
          Your Content
        </h1>

        <div className=" flex flex-col gap-5 flex-grow mx-5 ml-5 px-5  w-full md:px-16 ">
          <input
            name="title"
            id="title"
            className="bg-zinc-800 text-zinc-300 p-2 rounded-full outline-none focus:shadow-xl "
            placeholder="TITLE"
            style={{ fontSize: 19 }}
            onChange={handleChange}
            value={note.title.titleEdit}
          />
          <textarea
            name="description"
            id="description"
            className="bg-zinc-800 text-white p-2 rounded-md  outline-none flex-grow focus:shadow-xl "
            placeholder="Description"
            onChange={handleChange}
            value={note.description.descEdit}
          ></textarea>

          <div className="flex flex-row mb-5">
            <button
              onClick={handleClick}
              className="flex w-20 transform justify-center rounded-2xl border-b-4 border-gray-500 bg-orange-200 px-3 py-1  text-base font-bold transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 mr-3"
            >
              Edit
            </button>
            <button
              //   onClick={handleClick}
              className="flex w-20 transform justify-center rounded-2xl border-b-4 border-gray-500 bg-orange-200 px-3 py-1  text-base font-bold transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
            >
              <Link to="/blog">Back</Link>
            </button>
          </div>
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default EditSection;
