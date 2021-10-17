import React from "react";
import SideNavBar from "../components/SideNavBar";
// import Dashboard from "../components/Dashboard/Dashboard";
// import Log from "../components/Log/Log";
// import History from "../components/LogHistory/History";
// import Settings from "../components/Settings/Settings";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import EditLogModal from "./Log/EditLogModal";
// import Deletelog from "./Log/Deletelog";
// import DailyInformationPage from "./LogHistory/DailyInformationPage";

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
            <Route path="/log" exact component={Log} />
            <Route path="/log/:id" exact component={EditLogModal} />
            <Route path="/log/delete/:id" exact component={Deletelog} />
            <Route path="/loghistory" exact component={History} />
            <Route
              path="/loghistory/DailyInformationPage"
              exact
              component={DailyInformationPage}
            />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default HomePage;
