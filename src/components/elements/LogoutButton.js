import React from "react";
import Link from "next/link";

const LogoutButton = () => {
  return (
    <ul className="hidden lg:block">
      <li className="hover:text-gray-400 text-sm font-medium">
        <Link href={`/`}>{`LOGOUT`}</Link>
      </li>
    </ul>
  );
};

export default LogoutButton;
