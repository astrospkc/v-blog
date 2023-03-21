import React, { useContext, useEffect, useRef, useState } from "react";
import Card from "./Card";
import Category from "./Category";
// import NoteCard from "./NoteCard";
import { BsFillNodePlusFill } from "react-icons/bs";
import { NoteContext } from "../context/NoteState";
import { Link } from "react-router-dom";
import AddBlog from "./AddBlog";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Blog = (props) => {
  const navigate = useNavigate();

  const { getNotes, editNote, notes } = useContext(NoteContext);
  // console.log("notes length", notes.length);
  // console.log({ notes });
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ _id: " ", etitle: "", edescription: "" });

  const updateNote = (note) => {
    // ref.current.click();
    setNote({
      _id: note._id,
      etitle: note.title,
      edescription: note.description,
    });
    // setNote(note);
    // console.log("note", note);
  };
  // console.log(updateNote(note));

  const handleClick = (e) => {
    // console.log("updating note", note);
    editNote(note._id, note.etitle, note.edescription);
    refClose.current.click();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/signin");
    }
  }, []);

  // show Modal and edit modal
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  // show modal only
  const [showOnlyModal, setShowOnlyModal] = useState(false);
  const closeOnlyModal = () => {
    setShowOnlyModal(false);
  };

  return (
    <>
      <div>
        <Navbar />

        <div>
          {/* <Category /> */}

          {/* start of the added notes */}
          <div className="">
            {notes && notes.length === 0 ? (
              <div className="text-white">No notes to display</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 py-3 my-5 md:mx-20">
                {notes &&
                  notes.map((note) => {
                    return (
                      <Card
                        key={note._id}
                        note={note}
                        setShowModal={setShowModal}
                        setShowOnlyModal={setShowOnlyModal}
                        updateNote={updateNote}
                      />
                    );
                  })}
                {/* <Card /> */}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />

      {/* show modal and update it */}
      {showModal && (
        <div
          className="fixed w-full bg-zinc-700 h-screen flex flex-col"
          ref={ref}
        >
          <h1 className="text-white text-center font-bold text-2xl py-2">
            Your Content
          </h1>

          <div className=" flex flex-col gap-5  flex-grow mx-16">
            <input
              name="etitle"
              id="etitle"
              className="bg-zinc-800 text-zinc-300 p-3 rounded-full outline-none focus:shadow-xl "
              placeholder="TITLE"
              style={{ fontSize: 19 }}
              onChange={handleChange}
              value={note.etitle}
            />
            <textarea
              name="edescription"
              id="edescription"
              className="bg-zinc-800 text-white p-3 rounded-md  outline-none flex-grow focus:shadow-xl "
              placeholder="Description"
              onChange={handleChange}
              value={note.edescription}
            ></textarea>

            <div className="flex flex-row mb-5">
              <button
                onClick={handleClick}
                className="flex w-20 text-sm transform justify-center rounded-2xl  bg-[#16262e] px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
              >
                Edit
              </button>
              {/* <button ref={refClose} className="bg-blue-600 text-black">
            close
          </button> */}

              <button
                onClick={closeModal}
                ref={refClose}
                className="flex w-20 text-sm transform justify-center rounded-2xl   bg-[#16262e]  px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* show modal only --read ony */}
      {showOnlyModal && (
        <div
          className="fixed w-full bg-zinc-700 h-screen flex flex-col"
          ref={ref}
        >
          <h1 className="text-white text-center font-bold text-2xl py-2">
            Edit Your Content
          </h1>

          <div className=" flex flex-col gap-5  flex-grow mx-16">
            <input
              name="etitle"
              id="etitle"
              className="bg-zinc-800 text-zinc-300 p-3 rounded-full outline-none focus:shadow-xl "
              placeholder="TITLE"
              style={{ fontSize: 19 }}
              onChange={handleChange}
              value={note.etitle}
            />
            <textarea
              name="edescription"
              id="edescription"
              className="bg-zinc-800 text-white p-3 rounded-md  outline-none flex-grow focus:shadow-xl "
              placeholder="Description"
              onChange={handleChange}
              value={note.edescription}
            ></textarea>

            <div className="flex flex-row mb-5">
              <button
                onClick={closeOnlyModal}
                ref={refClose}
                className="flex w-20 text-sm transform justify-center rounded-2xl hover:bg-gray-700 bg-[#16262e]  px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
