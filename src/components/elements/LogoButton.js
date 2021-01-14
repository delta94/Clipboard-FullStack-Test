import React from "react";

const LogoButton = () => {
  return (
    <div className="relative rounded-full bg-blue-500 h-9 w-9 flex justify-center items-center">
      <p className="text-center text-white">JH</p>
      <span className="absolute -top-1 -right-1 inline-block w-4 h-4 bg-red-600 border-white rounded-full border-2 text-xs flex justify-center items-center text-white">
        2
      </span>
    </div>
  );
};

export default LogoButton;
