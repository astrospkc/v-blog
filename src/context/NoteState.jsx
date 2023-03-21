import React, { createContext, useState } from "react";
import axios from "axios";
import { url } from "../config/config";

const NoteContext = createContext(null);
const NoteState = (props) => {
  const [notes, setNotes] = useState([]);

  //get notes in homepage , login not required:
  const getAllNotes = async () => {
    try {
      const response = await fetch(`${url}/api/notes/getalldata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const jsonResponse = await response.data;
      const jsonResponse = await response.json();
      // console.log("jsonresponse", jsonResponse);
      setNotes(jsonResponse);
    } catch (error) {
      // console.log(error);
    }
  };

  //Get notes in respective user

  const getNotes = async () => {
    try {
      // console.log("token : ", localStorage.getItem("token"));
      const response = await fetch(`${url}/api/notes/fetchdata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("token"),
        },
      });
      // const jsonResponse = await response.data;
      const jsonResponse = await response.json();
      // console.log("jsonresponse", jsonResponse);
      setNotes(jsonResponse);
    } catch (error) {
      console.log("Error occured while fetching notes", error);
    }
  };

  //Add Note

  const addNote = async (title, description) => {
    try {
      const token = localStorage.getItem("token");
      // console.log({ token });
      const response = await fetch(`${url}/api/notes/addnotes`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          authtoken: token,
        },
        body: JSON.stringify({ title, description }),
      });

      const note = await response.json();

      setNotes(notes.concat(note));
      // console.log(title, description);
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Note

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("token"),
        },
        body: JSON.stringify(),
      });

      const jsonResponse = await response.json();
      // console.log(jsonResponse);
      const newNotes = notes.filter((note) => {
        return note._id !== id;
      });

      // console.log("notes after deletion", newNotes);
      setNotes(newNotes);
    } catch (error) {
      console.log(error);
    }
  };

  //Edit Note

  const editNote = async (id, title, description) => {
    try {
      const response = await fetch(`${url}/api/notes/updatenotes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authtoken: localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description }),
      });

      const jsonResponse = await response.json();
      // console.log({ jsonResponse });

      const newNotes = notes.map((note) => {
        if (note._id === id) {
          note.title = title;
          note.description = description;
        }
        return note;
      });
      setNotes(newNotes);
      // console.log("newNotes:after editing:", newNotes);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
export { NoteContext };
