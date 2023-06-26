import React, { useState } from "react";
import { url } from "../config/config";

const Search = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  // const handleInputChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // const performSearch = async () => {
  //   try {
  //     const response = await fetch(
  //       `${url}/api/notes/serch?query=${searchQuery}`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setSearchResults(data);
  //   } catch (error) {
  //     console.error("An error occurred during search: ", error);
  //   }
  // };

  return (
    <div className="my-4">
      <input
        type="text"
        // value={searchQuery}
        // onChange={handleInputChange}
        className="h-12 w-1/2 px-2 rounded-lg"
        placeholder="Search"
      />
      <button
        className=" h-12 m-2 px-2 rounded-lg hover:bg-slate-500"
        style={{ backgroundColor: "#A27B5C" }}
        // onClick={performSearch}
      >
        Search
      </button>
      {/* <div>
        {searchResults &&
          searchResults.map((result) => <p key={result.id}>{result.title}</p>)}
      </div> */}
    </div>
  );
};

export default Search;
