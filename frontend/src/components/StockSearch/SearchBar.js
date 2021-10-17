import React, { useState } from "react";

const SearchBar = (props) => {
  //     const handleChange = (event) => {
  //     props.setSearchTerm(event.target.value);
  //   };

  return (
    <div>
      <input
        className="px-4 py-1 h-10 w-72 text-gray-700 text-md bg-transparent border-2 border-white rounded-full focus:outline-none shadow-md shadow-inner"
        type="text"
        placeholder="Enter your stock search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
