import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthenticationContext } from "../SignupLogin/AuthenticationTokens";
import { UserNameContext } from "../SignupLogin/UserNameGlobal";

const ListOfStocks = () => {
  const tokens = useContext(AuthenticationContext);
  const userName = useContext(UserNameContext);

  console.log(userName);

  const fetchUserEmail = async () => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${tokens.access}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: { email: JSON.stringify(userName) },
    // };
    // try {
    //   console.log(requestOptions.body);
    //   const res = await fetch("http://localhost:5000/users", requestOptions);
    //   const data = await res.json();
    //   console.log("this is data:", data);
    // } catch (err) {
    //   console.log(err);
    // }
    const submit = { email: userName };
    const config = {
      headers: {
        Authorization: `Bearer ${tokens.access}`,
        "Content-Type": "application/json",
      },
    };
    axios
      .post("http://localhost:5000/users", submit, config)
      .then((res) => console.log("Stock Purchase Successful", res.data));
    // }
  };

  useEffect(() => {
    fetchUserEmail();
  }, []);

  return <div>This is ListOfStocks</div>;
};

export default ListOfStocks;

// axios
//   .post("http://localhost:5000/users", config)
//   .then((res) => console.log("successfully pulled user email", res));
// // fetch("http://localhost:5000/users", requestOptions)
// //   .then((res) => res.json())
// //   .then((res) => console.log("this is res: ", res));
