import React from "react";
import Link from "next/link";

const NavLinkItem = (props) => {
  return (
    <li className="uppercase hover:text-gray-400 text-sm font-medium">
      <Link href={props.route}>{props.title}</Link>
    </li>
  );
};

export default NavLinkItem;
