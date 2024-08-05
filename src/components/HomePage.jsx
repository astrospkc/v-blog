import React, { useContext, useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "./notes_image.jpg";
import Footer from "./Footer";
import { NoteContext } from "../context/NoteState";
import HomeCard from "./HomeCard";
import { url } from "../config/config";
import Search from "./Search";

import { Link } from "react-router-dom";

const HomePage = () => {
  const { getAllNotes, notes } = useContext(NoteContext);
  // console.log("getAllNotes:", getAllNotes());
  console.log("notes length", notes.length);
  console.log({ notes });

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

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center ">
        {/* <div className="flex flex-row"> */}
        <div className="flex flex-col   ">
          {/* blurred section */}

          <div
            className=" m-auto w-fit p-9 rounded-3xl shadow-lg shadow-gray-700  bg-gradient-to-r from-black to-gray-600"
            // style={{
            //   backgroundImage: `url(${Image})`,
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          >
            <div className="backdrop-blur-md p-2 ">
              <h1
                className="textfont text-center font-bold text-2xl md:text-5xl mb-20"
                style={{ color: "#A27B5C" }}
              >
                Lets write something better
              </h1>
              <p className="text-cyan-400 font-semibold m-auto mb-2 text-xl text-center ">
                Write your thoughts
              </p>
              <p
                style={{ fontFamily: "Ubuntu" }}
                className="text-white font-semibold mb-4 text-center"
              >
                Be Creative...
              </p>

              {/* <Search title={note.title} /> */}
            </div>
          </div>

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
                          updateNote={updateNote}
                        />
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <div className="flex bottom-0">
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
