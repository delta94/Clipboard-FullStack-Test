import React, { useContext } from "react";
import _ from "lodash";
import { Store } from "../../../context/context";
import { SEARCH_INPUT } from "../../../constants/actionTypes";

const SearchBar = () => {
  const { dispatch } = useContext(Store);

  const handleSearch = _.debounce((text) => {
    dispatch({
      type: SEARCH_INPUT,
      payload: {
        search: text,
      },
    });
  }, 1000);

  return (
    <div className="flex h-14 bg-white lg:m-4 px-4 lg:px-8 border-t lg:border border-gray-200">
      <div className="flex justify-center items-center">
        <div className="w-4 h-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.97 56.97">
            <path d="M55.15 51.89l-13.56-14.1A22.93 22.93 0 0046.99 23c0-12.68-10.32-23-23-23s-23 10.32-23 23 10.31 23 23 23c4.76 0 9.3-1.44 13.17-4.16l13.66 14.2a2.98 2.98 0 004.24.09 3 3 0 00.09-4.24zM23.98 6c9.38 0 17 7.63 17 17s-7.62 17-17 17-17-7.63-17-17 7.63-17 17-17z" />
          </svg>
        </div>
      </div>
      <input
        type="search"
        className="min-w-full h-full bg-white px-3 text-sm font-light focus:outline-none"
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
