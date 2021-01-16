import React, { useContext } from "react";
import { Store } from "../../../../context/context";
import { commafy } from "../../../../utils/helper";
import { SELECT_FILTER_OPTION } from "../../../../constants/actionTypes";

const FilterOptionButton = ({ forModal, filterType, title, count }) => {
  const { state, dispatch } = useContext(Store);
  const { filter } = state;
  const isActive = filter[filterType]
    ? filter[filterType].includes(title)
      ? true
      : false
    : false;

  const handleOptionClick = () => {
    dispatch({
      type: SELECT_FILTER_OPTION,
      payload: { filterType, filterOption: title },
    });
  };

  return (
    <li className={`${forModal ? "self-center" : "my-1.5"}`}>
      <button
        className="text-left focus:outline-none"
        onClick={handleOptionClick}
      >
        <span className={`font-light mr-3 ${isActive && "font-bold"}`}>
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
