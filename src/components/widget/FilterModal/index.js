import React from "react";
import { commafy } from "../../../utils/helper";
import { getFilterHeading } from "../../../utils/helper";
import filters from "../../../../data/filters.json";

const FilterModal = ({ filterType, onClose }) => {
  const data = filters.department;
  return (
    <div className="absolute flex h-full w-full bg-opacity-25 bg-black">
      <div className="fixed flex h-screen w-full justify-center items-center">
        <div className="w-3/4 bg-white rounded shadow-x1">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-bold">
              {getFilterHeading(filterType)}
            </span>
            <button onClick={onClose} className="w-3 h-4 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
                <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
              </svg>
            </button>
          </div>
          <ul className="grid grid-cols-4 grid-flow-row gap-4 p-4 text-sm">
            {data.map((item, index) => (
              <li key={index} className="self-center">
                <button className="hover:text-gray-400 focus:text-gray-300 focus:outline-none text-left">
                  <span className="font-light mr-3">{item.key}</span>
                  <span className="text-xs font-light text-gray-300">
                    {commafy(item.doc_count)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
