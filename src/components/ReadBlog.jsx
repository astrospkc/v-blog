import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ReadBlog = () => {
  const location = useLocation();
  const data = location.state;
  console.log("data:", data);

  const currentPath = location.pathname;

  return (
    <>
      <div
        className="justify-center items-center py-10 mx-10  "
        style={{ color: "#A27B5C" }}
      >
        <div className="flex flex-col">
          <h1 className="text-center font-bold text-white text-xl">
            Let's read
          </h1>
          <div className="shadow-lg shadow-gray-800 p-10">
            <h1 className="  items-center mx-auto text-xl font-bold mb-4 bg-orange-200 rounded-full w-fit px-4">
              {data.note.title.toUpperCase()}
            </h1>
            <p className="text-base md:text-lg text-orange-200">
              {data.note.description}
            </p>
          </div>
          <div className="flex justify-center items-center">
            {currentPath == "/home/read" ? (
              <button className="text-center text-lg font-bold mb-4 bg-orange-200 rounded-full px-2">
                <Link to="/home">Go Back</Link>
              </button>
            ) : (
              <button className="text-center text-lg font-bold mb-4 bg-orange-200 rounded-full px-2">
                <Link to="/blog">Go Back</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBlog;
