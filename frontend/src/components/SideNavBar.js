import React from "react";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <div className=" fixed h-screen w-60 bg-white bg-opacity-20 object-center shadow-lg text-gray-700">
      <div className="pt-12">
        {" "}
        <h1 className="font-extrabold text-2xl text-indigo-600">
          <Link to="/dashboard">
            <em>kcal</em>culate
          </Link>
        </h1>{" "}
      </div>

      <div className="pt-24 relative space-y-2 text-sm grid row-5 ">
        <div className="block flex items-center justify-left pl-12  uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
            />
          </svg>
          <span className="inline-flex ml-3">
            {" "}
            <Link to="/dashboard">Dashboard </Link>
          </span>
        </div>
        <div className="block flex items-center justify-left pl-12 uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="inline-flex ml-3">
            {" "}
            <Link to="/log"> Log </Link>
          </span>
        </div>
        <div className="block flex items-center justify-left pl-12 uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="inline-flex ml-3">
            {" "}
            <Link to="/loghistory"> Log History </Link>
          </span>
        </div>
        <div className="block flex items-center justify-left pl-12 uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="inline-flex ml-3">
            {" "}
            <Link to="/settings"> Settings </Link>
          </span>
        </div>
        <div className="block flex items-center justify-left pl-12 uppercase font-normal tracking-widest hover:shadow-md py-3 hover:text-white hover:bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-auto transform inline-flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="inline-flex ml-3">
            {" "}
            <Link to="/"> Logout </Link>
          </span>
        </div>
      </div>

      <div className="text-xs font-light uppercase tracking-wide absolute inset-x-0 bottom-0 pb-8 text-gray-500">
        ©StockFolio
      </div>
    </div>
  );
};

export default SideNavBar;
