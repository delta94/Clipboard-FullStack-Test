import React from "react";

const PrimaryButton = ({ title, onClick }) => {
  return (
    <button
      className="hidden lg:block rounded-lg border border-blue-500 text-blue-500 text-sm font-medium p-2 hover:bg-blue-500 hover:text-white focus:outline-none"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
