import React, { useContext } from "react";
import { Link } from "react-router-dom";

const HomeCard = (props) => {
  const { note } = props;
  console.log("title", note.title);

  return (
    <>
      {/* <AddBlog /> */}
      <div className=" bg-transparent  rounded-md relative hover:cursor-pointer ">
        <div className="flex flex-col   w-full ">
          {/* left section  */}
          <div
            className="flex flex-col rounded-xl shadow-md shadow-gray-600 hover:shadow-lg  hover:shadow-black bg-gradient-to-r from-violet-950 to-black border-t-2 border-white hover:bg-gradient-to-r hover:from-black hover:to-pink-950 "
            // style={{
            //   // backgroundImage: `url(${white_space})`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   minHeight: "20vh ",
            //   backdropFilter: blur(),
            // }}
          >
            <div className=" mx-5 my-5 p-3 flex flex-col  items-center justify-center ">
              <div className="">
                <h1
                  style={{ fontFamily: "Ubuntu" }}
                  className="singleline text-2xl font-bold mb-3 mx-4  overflow-hidden text-gray-300"
                >
                  {note.title}
                </h1>
              </div>
              <hr className="border-slate-700" />
              <div className=" ">
                <p className="multiline desc text-gray-400 overflow-ellipsis overflow-hidden">
                  {note.description}
                </p>

                <button
                  // onClick={handleButtonClick}

                  className="p-1 rounded-xl bg-black text-white hover:bg-gray-400 hover:text-black"
                >
                  <Link to="/read" state={{ note }}>
                    read more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
