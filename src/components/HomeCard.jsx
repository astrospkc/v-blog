import React, { useContext } from "react";

// import { IconContext } from "react-icons";
const MAX_LENGTH = 100;

const HomeCard = (props) => {
  //   const { deleteNote } = useContext(NoteContext);
  const { note, updateNote, setShowOnlyModal } = props;
  // console.log(note.title);
  return (
    <>
      {/* <AddBlog /> */}
      <div className=" bg-transparent  rounded-md relative hover:cursor-pointer ">
        <div className="flex flex-col   w-full ">
          {/* left section  */}
          <div
            className=" cardHome flex flex-col rounded-xl shadow-md shadow-gray-600 hover:shadow-lg  hover:shadow-black  "
            style={{
              // backgroundImage: `url(${white_space})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "20vh ",
              backdropFilter: blur(),
            }}
          >
            <div className=" mx-5 my-5 p-3 flex flex-col  items-center justify-center ">
              <div className="">
                <h1
                  style={{ fontFamily: "Ubuntu" }}
                  className="singleline text-2xl text-cyan-100 font-bold mb-3 mx-4  overflow-hidden"
                >
                  {note.title}
                </h1>
              </div>
              <hr className="border-slate-700" />
              <div className=" ">
                <p className="multiline desc text-[#2e4756] overflow-ellipsis overflow-hidden">
                  {note.description}
                </p>
                <div
                  onClick={() => {
                    setShowOnlyModal(true);
                    updateNote(note);
                  }}
                >
                  <a
                    href=""
                    className=" text-slate-800 hover:text-blue-500 underline decoration-sky-500"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right section */}

          {/* <div className="text-white flex flex-col gap-6 ml-2 cursor-pointer text-2xl mt-auto absolute lg:relative">
            <FaGithubSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaLinkedin />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HomeCard;
