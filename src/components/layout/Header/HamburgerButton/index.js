import React from "react";

const styles = {
  topLineClass: `h-0.5 w-5 transition-all duration-200 ease-in bg-black mb-1 origin-top-left`,
  middleLineClass: `h-0.5 w-5 transition-all duration-200 ease-in bg-black`,
  bottomLineClass: `h-0.5 w-5 transition-all duration-200 ease-in bg-black mt-1 origin-top-left`,
};

const HamburgerButton = ({ menuOpen, handleClick }) => {
  return (
    <div
      className="flex flex-col justify-center items-center h-8 w-8 cursor-pointer lg:hidden mr-3"
      onClick={handleClick}
    >
      <div
        className={`${styles.topLineClass} ${
          menuOpen ? "transform rotate-45" : "none"
        }`}
      />
      <div
        className={`${styles.middleLineClass} ${
          menuOpen ? "transform translate-x-2 opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${styles.bottomLineClass} mt-1 ${
          menuOpen
            ? "transform -rotate-45 -translate-x-0.5 translate-y-0.5"
            : "none"
        }`}
      />
    </div>
  );
};

export default HamburgerButton;
