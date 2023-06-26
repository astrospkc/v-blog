import React, { useContext, useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "./notes_image.jpg";
import Footer from "./Footer";
import { NoteContext } from "../context/NoteState";
import HomeCard from "./HomeCard";
import { url } from "../config/config";
import Search from "./Search";
import ShowModal from "./ShowModal";
import { Link } from "react-router-dom";

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
  // console.log("try", setShowOnlyModal());
  const closeOnlyModal = () => {
    setShowOnlyModal(false);
  };

  useEffect(() => {
    console.log("showOnlyModal", showOnlyModal);
  }, [showOnlyModal]);

  // for search

  // targetRef

  return (
    <>
      <div>
        {/* <div className="flex flex-row"> */}
        <div className="flex flex-col   ">
          {/* blurred section */}

          <div
            className=" m-auto w-full p-9"
            style={{
              backgroundImage: `url(${Image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="backdrop-blur-md p-2">
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

              <Search title={note.title} />
            </div>
          </div>

          {/* start of the added notes */}
          <div className="flex justify-center items-center">
            <div className="">
              {notes && notes.length === 0 ? (
                <div className="relative text-white text-center">
                  No notes to display
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 py-3 justify-center items-center">
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

        {showOnlyModal && (
          <div className=" absolute w-fit  top-[10%] ">
            <div
              className="flex w-full flex-col bg-zinc-700 h-fit rounded-3xl "
              style={{ backgroundColor: "#3F4E4F" }}
              ref={ref}
            >
              <div
                className=" flex flex-col gap-5  flex-grow mx-16 mt-16 "
                style={{ color: "#DCD7C9" }}
              >
                <h1 className="font-bold text-xl text-center">{note.title}</h1>
                <p className="text-sm md:text-lg ">{note.description}</p>

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
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
