import React, { useState } from "react";
import HamburgerButton from "../../elements/HamburgerButton";
import PrimaryButton from "../../elements/PrimaryButton";
import NavLinkItem from "../../elements/NavLinkItem";
import LogoutButton from "../../elements/LogoutButton";
import LogoButton from "../../elements/LogoButton";
import { HEADERLOGOSTR, NavMenuNames } from "../../../constants/constants";

const NavHeader = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleCreateJobBtnClick = () => {};
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
        <PrimaryButton
          onClick={() => handleCreateJobBtnClick()}
          title={`CREATE JOB`}
        />
        <LogoButton />
        <LogoutButton />
      </div>
    </nav>
  );
};

export default NavHeader;
