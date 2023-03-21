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
const App = () => {
  return (
    <NoteState>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen ">
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/blog/add" element={<AddBlog />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </NoteState>
  );
};

export default App;
