import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const history = useHistory();

  const handleEmailChange = async (event) => {
    await setEmail(event.target.value);
    console.log(email);
  };

  const handleNameChange = async (event) => {
    await setName(event.target.value);
    console.log(name);
  };

  const handlePasswordChange = async (event) => {
    await setPassword(event.target.value);
    console.log(password);
  };

  const handleVerifyPasswordChange = async (event) => {
    await setVerifyPassword(event.target.value);
    console.log(verifyPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === verifyPassword) {
      const newUser = {
        email: email,
        name: name,
        password: password,
      };

      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      };

      // const requestOptions2 = {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      // };

      const res = await fetch("http://localhost:5000/users", requestOptions);
      // const res2 = await fetch(
      //   "http://localhost:5000/useraccountvalue",
      //   requestOptions
      // );
      // const res = await Promise.all(
      //   [await axios.put("http://localhost:5000/users", requestOptions)],
      //   [await axios.put("https://localhost:5000/useraccountvalue")]
      // );
      history.push("/signin");
    } else {
      console.log("Passwords do not match. Please try again");
    }
  };
  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 min-h-screen">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
        <h1 className="font-bold text-3xl">Sign Up.</h1>

        <Link to="/signin" className="text-sm text-indigo-600 pb-6">
          Already have an account? Sign in here
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
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
          />

          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Verify Password"
            onChange={handleVerifyPasswordChange}
          />

          <button
            className="block bg-indigo-600 text-white hover:bg-indigo-700 w-full p-3 rounded mb-4"
            type="submit"
            onClick={handleSubmit}
          >
            Next
          </button>
        </form>
      </div>
      <span className="text-xs relative inset-x-0 bottom-0 pb-8 text-xs font-light uppercase tracking-wide">
        ©2021 Counting Bros
      </span>
    </div>
  );
};

export default SignUp;
