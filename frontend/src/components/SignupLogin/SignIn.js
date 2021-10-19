import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import Dashboard from '../Dashboard/Dashboard';

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState("");
  // store the token in a useState and then useContext

  const history = useHistory();

  const handleEmailChange = async (event) => {
    await setEmail(event.target.value);
  };

  const handlePasswordChange = async (event) => {
    await setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === "") {
      console.log("Email cannot be empty");
    } else {
      const existingUser = {
        email: email,
        password: password,
      };

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer token",
        },
        body: JSON.stringify(existingUser),
        // mode: "no-cors",
      };

      try {
        const res = await fetch("http://localhost:5000/login", requestOptions);
        const data = await res.json();
        console.log("this is data:", data);
        console.log(
          "Backend POST method successfully run - email, password authenticated"
        );
        props.setAuth(true);
        history.push("/stocksearch");

        // if (data.status === "ok") {
        //   console.log("user valid");
        //   console.log("signin: ", data.user);
        //   //   setAuthenticated(data.jwt) OR do authorisation
        //   props.handleChange(data.user);
        //   history.push("/stocksearch");
        //   // console.log(theUser)
        // } else {
        //   console.log("email/password invalid");
        // }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center min-h-screen px-2">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
        <h1 className="font-bold text-3xl">Sign In.</h1>
        <Link to="/signup" className="text-sm text-indigo-600 pb-6">
          Don't have an account? Create one here
        </Link>
        <form className="pt-4">
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Email"
            onChange={handleEmailChange}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />

          <button
            className="block bg-indigo-600 text-white hover:bg-indigo-700 w-full p-3 rounded mb-4"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <span className="text-xs absolute inset-x-0 bottom-0 pb-8 text-xs font-light uppercase tracking-wide">
        ©2021 Counting Bros
      </span>
    </div>
  );
};

export default SignIn;
