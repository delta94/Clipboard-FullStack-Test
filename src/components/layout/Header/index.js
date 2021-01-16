import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import NavLinkItem from "./NavLinkItem";
import { HEADERLOGOSTR, NavMenuNames } from "../../../constants/constants";

const Header = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleHamburgerBtnClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav className="flex justify-between items-center px-4 lg:px-8 w-full h-16 bg-white">
      <div className="flex items-center">
        <HamburgerButton
          handleClick={() => handleHamburgerBtnClick()}
          mobileMenuVisible={mobileMenuVisible}
        />
        <h1 className="uppercase font-medium text-blue-500">{HEADERLOGOSTR}</h1>
      </div>
      <ul className="hidden lg:flex space-x-6 xl:space-x-12">
        {NavMenuNames.map((item, index) => (
          <NavLinkItem
            title={item.title}
            key={`nav_menu_item_${index}`}
            route={item.url}
          />
        ))}
      </ul>
      <div className="flex justify-end flex-grow sm:flex-none items-center space-x-8">
        <button
          className="hidden lg:block rounded-lg border border-blue-500 text-blue-500 text-sm font-medium p-2 hover:bg-blue-500 hover:text-white focus:outline-none"
          onClick={() => {}}
        >
          <span>CREATE JOB</span>
        </button>
        <div
          className="relative rounded-full bg-blue-500 h-9 w-9 flex justify-center items-center cursor-pointer"
          onClick={() => {}}
        >
          <p className="text-center text-white">JH</p>
          <span className="absolute -top-1 -right-1 inline-block w-4 h-4 bg-red-600 border-white rounded-full border-2 text-xs flex justify-center items-center text-white">
            2
          </span>
        </div>
        <button className="hidden lg:block focus:outline-none">
          <span className="hover:text-gray-400 text-sm font-medium">
            {`LOGOUT`}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
