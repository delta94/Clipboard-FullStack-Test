import React, { useState } from "react";
import { commafy } from "../../utils/helper";

const FilterOptionButton = ({ filterType, title, count, handleClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOptionClick = () => {
    setIsClicked(!isClicked);
    handleClick(filterType, title);
  };

  return (
    <li className="my-1.5">
      <button
        className="hover:text-gray-400 focus:outline-none text-left"
        onClick={() => handleOptionClick()}
      >
        <span className={`font-light mr-3 ${isClicked && "font-bold"}`}>
          {title}
        </span>
        <span className="text-xs font-light text-gray-300">
          {commafy(count)}
        </span>
      </button>
    </li>
  );
};

export default FilterOptionButton;
