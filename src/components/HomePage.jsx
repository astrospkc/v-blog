import React, { useContext, useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "./notes_image.jpg";
import Footer from "./Footer";
import { NoteContext } from "../context/NoteState";
import HomeCard from "./HomeCard";

const HomePage = () => {
  const { getAllNotes, notes } = useContext(NoteContext);
  // console.log("notes length", notes.length);
  // console.log({ notes });
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ title: "", description: "" });

  const updateNote = (note) => {
    // ref.current.click();
    setNote({
      // _id: note._id,
      title: note.title,
      description: note.description,
    });
    // setNote(note);
    // console.log("note", note);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  // show modal only
  const [showOnlyModal, setShowOnlyModal] = useState(false);
  const closeOnlyModal = () => {
    setShowOnlyModal(false);
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col   ">
            {/* blurred section */}

            <div
              className=" m-auto w-2/3 p-9"
              style={{
                backgroundImage: `url(${Image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="backdrop-blur-md">
                <h1
                  className="textfont text-center font-bold text-2xl md:text-5xl mb-20"
                  style={{ color: "#A27B5C" }}
                >
                  Lets write something better
                </h1>
                <p className="text-black font-semibold text-left m-auto mb-2">
                  Write your thoughts
                </p>
                <p
                  style={{ fontFamily: "Ubuntu" }}
                  className="text-white font-semibold mb-4"
                >
                  Be Creative...
                </p>

                <div className="my-4">
                  <input
                    type="text"
                    className="h-12 w-1/2 px-2 rounded-lg"
                    placeholder="Search"
                  />
                  <button className="bg-blue-500 h-12 m-2 px-2 rounded-lg hover:bg-slate-500">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* start of the added notes */}
          <div className="">
            {notes && notes.length === 0 ? (
              <div className="text-white">No notes to display</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 py-3 my-5 mx-14">
                {notes &&
                  notes.map((note) => {
                    return (
                      <HomeCard
                        key={note._id}
                        note={note}
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
      {/* </div> */}
      {/* </div> */}
      <Footer />

      {/* show modal only --read ony */}
      {showOnlyModal && (
        <div
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
            <button
              onClick={closeOnlyModal}
              ref={refClose}
              className="flex w-20 text-sm transform justify-center rounded-2xl border-b-4 border-gray-500 bg-gray-400  px-3 py-1 text-gray-100 transition  duration-200 ease-in-out hover:translate-y-px hover:border-b-2 "
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
