import React from "react";

const Error = ({ message }) => {
  return (
    <div className="w-full bg-red-600 py-2 my-3">
      <h2 className="font-bold text-white text-center">{message}</h2>
    </div>
  );
};

export default Error;
