import React, { useContext, useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Image from "./notes_image.jpg";
import Footer from "./Footer";
import { NoteContext } from "../context/NoteState";
import HomeCard from "./HomeCard";
import { url } from "../config/config";
import Search from "./Search";

import { Link } from "react-router-dom";
import { Input } from "@chakra-ui/react";

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
        <div className="flex flex-col w-full  ">
          {/* blurred section */}

          <div className=" m-auto w-1/2 p-9 rounded-3xl  mt-8 mb-8">
            <Input placeholder="Search ...." />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-28 mx-20  ">
            <div className="kanit-black text-5xl text-yellow-50 flex flex-col text-center">
              <span>Blog</span>
              <span>The</span>
              <span>Way</span>
            </div>
            <div className="text-center text-yellow-200 opacity-70 indie-flower-regular shadow-sm shadow-yellow-50 p-5 w-fit">
              "The Beauty lies in the writings."
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="">
              {notes && notes.length === 0 ? (
                <div className="relative text-black text-center bg-orange-200 p-3 rounded-3xl">
                  <h1>Wait for sometime</h1>
                  <div>Just a little wait for your blogs</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4 gap-y-20 py-3 justify-center items-center mx-5 ">
                  {notes &&
                    notes.map((note, index) => {
                      return (
                        <HomeCard
                          key={note._id}
                          note={note}
                          updateNote={updateNote}
                          ind={index}
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
