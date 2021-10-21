import React, { useState, useContext } from "react";
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
import { AuthenticationContext } from "./components/SignupLogin/AuthenticationTokens";
import { UserNameContext } from "./components/SignupLogin/UserNameGlobal";

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState({});
  const [userName, setUserName] = useState("");

  const handleSignIn = () => {
    setAuth(true);
  };
  const handleLogout = async (event) => {
    setAuth(false);
    await setUser(null);
  };

  return (
    // <TokensContext>

    <Router>
      <AuthenticationContext.Provider value={tokens}>
        <UserNameContext.Provider value={userName}>
          <div className="App bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 min-h-screen">
            <main>
              <Switch>
                <Route path="/signin" exact>
                  <SignIn
                    handleSignIn={handleSignIn}
                    setAuth={setAuth}
                    setTokens={setTokens}
                    setUserName={setUserName}
                  />
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
        </UserNameContext.Provider>
      </AuthenticationContext.Provider>
    </Router>

    // </TokensContext>
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
