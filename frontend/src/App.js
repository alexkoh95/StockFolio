import React, { useState } from "react";
// import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import HomePage from "../src/components/HomePage.js";
import Settings from "./components/Settings/Settings";
import StockSearch from "./components/StockSearch/StockSearch";
import Performance from "./components/Performance/Performance";

// Josiah notes:
// done -- add props to sign-in props={ }
// done -- add 2 states, pass them to sign-in
// done -- private router wrap up member pages
// add logout component/function force auth state to be false
// userState to be null after logout

function App() {
  // const [auth, setAuth] = useState(false);
  // const [user, setUser] = useState(null);

  // const handleChange = async (userData) => {
  //   setAuth(true);
  //   await setUser(userData);
  //   console.log("userData: ", userData);
  //   // console.log("setUser: ", setUser)
  //   console.log("user state: ", user);
  //   // console.log("inside auth :", auth)
  //   // console.log("inside user :", user)
  // };
  // // console.log("outside auth :", auth)
  // console.log("outside user :", user)

  // NEED TO PROPS AND CALL THIS ALONG NAV BAR
  // const handleLogout = async (event) => {
  //   setAuth(false);
  //   await setUser(null);
  // };

  return (
    <Router>
      <div className="App bg-gradient-to-br from-yellow-50 via-pink-50 to-indigo-100 min-h-screen">
        <main>
          <Switch>
            <Route path="/homepage" exact component={HomePage}></Route>
            <Route path="/Dashboard" exact component={Dashboard}></Route>
            <Route path="/Performance" exact component={Performance}></Route>
            <Route path="/Settings" exact component={Settings}></Route>
            <Route path="/StockSearch" exact component={StockSearch}></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

// function PrivateRoute({ auth, Component, path, location, ...rest }) {
//   //if auth is true then show Route else redirect to login
//   return (
//     <>
//       {auth ? (
//         <Route path={path}>
//           <Component {...rest} />
//         </Route>
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/",
//             state: { from: location },
//           }}
//         />
//       )}
//     </>
//   );
// }

export default App;
