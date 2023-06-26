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
      navigate("/signIn");
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
      <div className="">
        {/* {!showModal && !showOnlyModal && ( */}
        <div className="ml-16 md:ml-4 mr-3 flex relative overflow-scroll justify-center items-center">
          <div>
            {/* <Category /> */}

            {/* start of the added notes */}
            <div className="flex justify-center items-center">
              {notes && notes.length === 0 ? (
                <div className="text-white text-center m-8 text-xl md:text-2xl">
                  No notes to display. Write something of your own. click on{" "}
                  <button className="border-r-2 border-l-2  px-2 rounded-full border-black text-yellow-500 hover:cursor-pointer">
                    <Link to="/blog/add">Add Blog</Link>
                  </button>
                </div>
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

        {/* )} */}

        {/* <Footer /> */}

        {/* show modal and update it */}
        {showModal && (
          <div className="fixed top-[10%] m-2 ">
            <div
              className=" fixed flex w-fit flex-col bg-zinc-700 h-1/2 rounded-3xl "
              style={{ backgroundColor: "#DCD7C9" }}
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
          </div>
        )}

        {/* show modal only --read ony */}
        {showOnlyModal && (
          <div className=" fixed w-fit top-[10%] h-fit  ">
            <div
              className=" fixed flex  flex-col bg-zinc-700 rounded-3xl  "
              style={{ backgroundColor: "#3F4E4F" }}
              ref={ref}
            >
              <div
                className=" flex flex-col gap-5  flex-grow mx-16 mt-16 "
                style={{ color: "#DCD7C9" }}
              >
                <h1 className="font-bold text-xl text-center">{note.etitle}</h1>
                <p className="text-sm md:text-lg">{note.edescription}</p>

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
          </div>
        )}
        <div className="fixed bottom-0 flex justify-center items-center mb-3">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
