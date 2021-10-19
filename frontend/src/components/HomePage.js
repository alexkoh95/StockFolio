import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideNavBar from "../components/SideNavBar";
import Dashboard from "../components/Dashboard/Dashboard";
import Settings from "../components/Settings/Settings";
import StockSearch from "../components/StockSearch/StockSearch";
import Performance from "../components/Performance/Performance";

const HomePage = () => {
  return (
    <Router>
      <div className="App">
        <div className="">
          <SideNavBar />
        </div>
        <main className="mx-4 p-9 pl-64">
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/Performance" exact component={Performance} />
            <Route path="/StockSearch" exact component={StockSearch} />
            <Route path="/Settings" exact component={Settings} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default HomePage;
