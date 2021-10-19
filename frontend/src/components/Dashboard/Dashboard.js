import React, { useState } from "react";
import SideNavBar from "../SideNavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountValue from "./AccountValue";
import ListOfStocks from "./ListOfStocks";
import Visualisation from "./Visualisation";

const Dashboard = () => {
  //need to import account information here

  //need to import account's stock information here
  return (
    <h1>
      <div>
        <div className="">
          <SideNavBar />
        </div>
        <main className="mx-4 p-9 pl-64">
          <AccountValue />
          <Visualisation />
          <ListOfStocks />
        </main>
      </div>
    </h1>
  );
};

export default Dashboard;
