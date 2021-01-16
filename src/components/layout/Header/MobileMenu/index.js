import React from "react";
import Link from "next/link";
import { NavMenuNames } from "../../../../constants/constants";

const MobileMenu = ({ menuOpen }) => {
  return (
    <ul
      className={`absolute flex flex-col bg-white h-0 w-full text-sm ${
        menuOpen ? "h-60" : "h-0"
      }`}
    >
      {menuOpen && (
        <>
          {NavMenuNames.map((item, index) => (
            <li
              key={index}
              className="flex justify-center items-center uppercase w-full h-12 opacity-0 animate-appear border-b hover:bg-gray-300"
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default MobileMenu;
