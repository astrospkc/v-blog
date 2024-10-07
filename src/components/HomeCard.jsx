import React, { useContext } from "react";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  const { note, ind } = props;
  // console.log("title", note.title, note._id, ind);

  return (
    <>
      {/* <AddBlog /> */}
      <div className=" bg-transparent  rounded-md relative hover:cursor-pointer ">
        <div className="flex flex-col   w-full ">
          {/* left section  */}
          <div
            className={`flex flex-col ${
              ind % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-20 items-center  p-4 rounded-md`}
          >
            <div className="protest-strike-regular text-yellow-700 shadow-lg shadow-yellow-600 p-4 rounded-3xl">
              {note.title}
            </div>

            <div className="josefin-san text-yellow-500 opacity-50">
              {note.description}
            </div>
            <button className="p-1 rounded-xl bg-yellow-800 text-white hover:bg-gray-400 hover:text-black w-fit flex  ">
              <Link to="/read" state={{ note }}>
                read more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
