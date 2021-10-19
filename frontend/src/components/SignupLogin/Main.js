import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex items-center justify-center space-x-2 h-screen ">
      <div className="grid-rows-2 mb-12">
        <div className="pb-10 text-5xl font-semibold leading-18">
          <h1 className="font-extrabold text-2xl text-indigo-600 pb-2">
            <em>kcal</em>culate
          </h1>
          <h1>
            <span className="font-bold text-indigo-600">Invest</span> In your
            Future
            <br />
            FILLER TEXT{" "}
            <span className="font-bold text-indigo-600">
              <em>TEMPORARY</em>
            </span>
          </h1>
        </div>

        <div>
          <div className="inline-flex">
            {" "}
            <h1>
              <Link
                to="/signin"
                className="m-3 px-5 py-2 border-2 border-indigo-600 uppercase font-semibold hover:bg-indigo-600 hover:text-white"
              >
                Sign In
              </Link>
            </h1>
          </div>
          <div className="inline-flex">
            {" "}
            <h1>
              {" "}
              <Link
                to="/signup"
                className="m-3 px-5 py-2 border-2 border-indigo-600 uppercase font-semibold hover:bg-indigo-600 hover:text-white"
              >
                Create an account
              </Link>
            </h1>
          </div>
        </div>

        <span className="text-xs absolute inset-x-0 bottom-0 pb-8 text-xs font-light uppercase tracking-wide">
          ©2021 Counting Bros
        </span>
      </div>
    </div>
  );
};

export default Main;
