import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import NoteState from "./context/NoteState";
import About from "./components/About";
import AddBlog from "./components/AddBlog";
import HomePage from "./components/HomePage";
import StartPage from "./components/StartPage";

import ReadBlog from "./components/ReadBlog";

import EditSection from "./components/EditSection";
const App = () => {
  return (
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
        <div className="flex flex-row  md:relative ">
          <div className="flex absolute md:fixed w-fit md:w-[10%] z-10 ">
            <Navbar />
          </div>
          <div className=" w-[100%] md:w-[90%] md:ml-auto mr-2  ">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/read" element={<ReadBlog />} />
              <Route path="/home/read" element={<ReadBlog />} />
              <Route path="/blog/edit" element={<EditSection />} />

              <Route path="/about" element={<About />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />

              <Route path="/blog/add" element={<AddBlog />} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </NoteState>
  );
};

export default App;
