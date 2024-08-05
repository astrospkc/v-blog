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
import Navbar1 from "./components/Navbar1";

const App = () => {
  // const location = useLocation();

  return (
    <NoteState>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/start" element={<StartPage />} />
        </Routes> */}
        <div className="flex flex-col bg-gradient-to-r from-indigo-950 to-black min-h-screen">
          <div className="flex-none top-0 h-fit w-full">
            <Navbar1 />
          </div>
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/read" element={<ReadBlog />} />
              <Route path="/read" element={<ReadBlog />} />
              <Route path="/blog/edit" element={<EditSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/blog/add" element={<AddBlog />} />
            </Routes>
          </div>
          <div className="flex bottom-0 h-fit justify-center items-center bg-black shadow-lg shadow-gray-700">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </NoteState>
  );
};

export default App;
