import React, { useContext, useEffect, useRef, useState } from "react";
import { NoteContext } from "../context/NoteState";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const EditSection = () => {
  const context = useContext(NoteContext);
  const navigate = useNavigate();

  const { editNote } = context;

  const location = useLocation();

  const [note, setNote] = useState({});

  const ref = useRef("");

  useEffect(() => {
    if (location.state) {
      const data = location.state;
      console.log("data: new ", data);
      const id = data.note._id;
      const title = data.note.title;
      const description = data.note.description;

      setNote({
        _id: id,
        title,
        description,
      });
    }
  }, [location.state]);

  useEffect(() => {
    ref.current = note;
  }, [note]);

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note._id, note.title, note.description);
    navigate("/blog");
  };

  const handleBackClick = () => {
    navigate("/blog");
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="   h-screen  flex flex-col justify-center items-center w-full  mt-20">
        <h1 className="text-white text-center font-bold text-2xl py-2">
          Your Content
        </h1>

        <div
          className=" flex flex-col gap-5 flex-grow mx-5 ml-5 px-5  w-full md:px-16 "
          ref={ref}
        >
          <input
            name="title"
            id="title"
            className="bg-zinc-800 text-zinc-300 p-2 rounded-full outline-none focus:shadow-xl "
            style={{ backgroundColor: "#61876E", fontSize: 19 }}
            placeholder="TITLE"
            onChange={handleChange}
            value={note?.title || ""}
          />

          <textarea
            name="description"
            id="description"
            className="bg-zinc-800 text-white p-2 rounded-md  outline-none flex-grow focus:shadow-xl "
            style={{ backgroundColor: "#61876E" }}
            placeholder="Description"
            onChange={handleChange}
            value={note?.description || ""}
          ></textarea>

          <div className="flex flex-row mb-5">
            <button
              onClick={handleClick}
              className="flex w-20 transform justify-center rounded-2xl border-b-4 border-gray-500 bg-orange-200 px-3 py-1  text-base font-bold transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 mr-3"
            >
              Edit
            </button>
            <button
              onClick={handleBackClick}
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
