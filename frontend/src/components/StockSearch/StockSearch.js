import React, { useState } from "react";
import SideNavBar from "../SideNavBar";
// import SearchBar from "./SearchBar";
import Result from "./Result";

// alex.koh95@hotmail.com API
// const APIKEY = "TWNBNVG7D50RBO6F";
// UCL API
const APIKEY = "TD5BNJPDBLJKBVAE";

const StockSearch = () => {
  // =====================================================
  //                  USE STATES & VARIABLES
  // =====================================================
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="">
        <SideNavBar />
      </div>
      <main className="mx-4 p-9 pl-64">
        {/* <SearchBar setSearchTerm={setSearchTerm} /> */}
        <Result APIKEY={APIKEY} setsearchTerm={setSearchTerm} />
      </main>
    </div>
  );
};

export default StockSearch;
