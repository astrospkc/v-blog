import React, { useContext } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex flex-col justify-center items-center my-10 mx-4">
        <h1 className="text-white text-3xl font-bold">About Me</h1>
        <div className="flex flex-col justify-center items-center text-orange-200">
          <h1 className="my-3 ">Why this app ?</h1>
          <p>
            Welcome to Blogging website. Let's first answer, Why this app?
            Writing a good blog is a good practice, one should write a blog for
            itself and for others too. It helps other person to know the things
            that they didn't know before, it helps the blogger to improve their
            writing and share their knowledge for others to use them. I
            personally feel that even there are so many articles to read about
            certain topics, there are always a good blogger whose blog
            clearifies so many things and it actually inspires other person to
            write or understand in some way or other. So feel free to share your
            understanding about certain topics or just share about your day.
          </p>
          {/* <h3>Next, What's the use of this?</h3>
        <p>The main use is that a person can</p> */}
        </div>
      </div>
      ;
      <Footer />
    </>
  );
};

export default About;
