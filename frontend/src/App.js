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
import SignIn from "./components/SignupLogin/SignIn";
import SignUp from "./components/SignupLogin/SignUp";

// Josiah notes:
// done -- add props to sign-in props={ }
// done -- add 2 states, pass them to sign-in
// done -- private router wrap up member pages
// add logout component/function force auth state to be false
// userState to be null after logout

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    setAuth(true);
  };
  const handleLogout = async (event) => {
    setAuth(false);
    await setUser(null);
  };

  return (
    <Router>
      <div className="App bg-gradient-to-br from-yellow-50 via-pink-50 to-indigo-100 min-h-screen">
        <main>
          <Switch>
            <Route path="/signin" exact>
              <SignIn handleSignIn={handleSignIn} setAuth={setAuth} />
            </Route>
            <Route path="/signup" exact component={SignUp} />
            <PrivateRoute
              path="/homepage"
              exact
              Component={HomePage}
              auth={auth}
              userLogin={user}
            />

            <PrivateRoute
              path="/Dashboard"
              exact
              Component={Dashboard}
              auth={auth}
              userLogin={user}
            />
            <PrivateRoute
              path="/Performance"
              exact
              Component={Performance}
              auth={auth}
              userLogin={user}
            />
            <PrivateRoute
              path="/Settings"
              exact
              Component={Settings}
              auth={auth}
              userLogin={user}
            />
            <PrivateRoute
              path="/StockSearch"
              exact
              Component={StockSearch}
              auth={auth}
              userLogin={user}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function PrivateRoute({ auth, Component, path, location, ...rest }) {
  //if auth is true then show Route else redirect to login
  return (
    <>
      {auth ? (
        <Route path={path}>
          <Component {...rest} />
        </Route>
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      )}
    </>
  );
}

export default App;
