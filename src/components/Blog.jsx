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

  const [note, setNote] = useState({ _id: " ", etitle: "", edescription: "" });

  const updateNote = (note) => {
    setNote({
      _id: note._id,
      etitle: note.title,
      edescription: note.description,
    });
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

  return (
    <>
      <div className="relative">
        <div className="text-4xl   font-semibold font-serif text-center pt-8 text-white ">
          MY BLOGS
        </div>
        <div className="ml-4 mr-3 flex relative justify-center items-center">
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
                    notes.map((e) => {
                      return (
                        <Card
                          key={e._id}
                          note={e}
                          updateNote={updateNote}
                          handlechange={handleChange}
                          editnote={editNote}
                        />
                      );
                    })}
                  {/* <Card /> */}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" mt-32">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
