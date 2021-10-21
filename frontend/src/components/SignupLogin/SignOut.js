import React from "react";

const SignOut = () => {
  return (
    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center min-h-screen px-2">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-black w-full my-10">
        <h1 className="font-bold text-3xl">Thank you for using StockFolio!</h1>
      </div>
      <span className="text-xs absolute inset-x-0 bottom-0 pb-8 text-xs font-light uppercase tracking-wide">
        ©2021 StockFolio
      </span>
    </div>
  );
};

export default SignOut;
