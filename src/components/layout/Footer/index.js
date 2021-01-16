import React from "react";
import Link from "next/Link";
import {
  ABOUTUS,
  ABOUTUSDESC,
  COPYRIGHT,
  SITEMAP,
  PRIVACY,
  PrivacyMenus,
  SiteMapMenus,
} from "../../../constants/constants";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-white p-3 lg:p-7">
      <div className="flex flex-col lg:w-1/2 m-3">
        <h1 className="font-medium text-xl mb-3">{ABOUTUS}</h1>
        <p className="text-sm mb-2">{ABOUTUSDESC}</p>
        <span className="text-sm">{COPYRIGHT}</span>
      </div>
      <div className="flex flex-col flex-1 m-3">
        <h1 className="font-medium text-xl mb-3">{SITEMAP}</h1>
        <ul className="flex flex-col text-sm">
          {SiteMapMenus.map((item, index) => (
            <li key={index} className="mb-2">
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col flex-1 m-3">
        <h1 className="font-medium text-xl mb-3">{PRIVACY}</h1>
        <ul className="flex flex-col text-sm">
          {PrivacyMenus.map((item, index) => (
            <li key={index} className="mb-2">
              <Link href="/">{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
