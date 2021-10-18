import React, { useState } from "react";
import SideNavBar from "../SideNavBar";
import SearchBar from "./SearchBar";
import Result from "./Result";

const APIKEY = " TWNBNVG7D50RBO6F";

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
        <h1>This is StockSearch Page</h1>
        <SearchBar />
        <Result APIKEY={APIKEY} searchTerm={searchTerm} />
      </main>
    </div>
  );
};

export default StockSearch;
