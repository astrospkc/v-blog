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
const App = () => {
  return (
    <NoteState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
        </Routes>
        <div className="flex flex-row min-h-screen md:relative ">
          <div className="flex relative md:fixed md:w-[10%] ">
            <Navbar />
          </div>
          <div className="md:w-[87%] ml-auto absolute md:static">
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
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
