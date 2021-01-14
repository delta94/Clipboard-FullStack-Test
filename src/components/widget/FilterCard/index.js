import React from "react";
import FilterOptionButton from "../../elements/FilterOptionButton";
import { getFilterHeading } from "../../../utils/helper";

const FilterCard = ({
  heading,
  filterOptions,
  onClickShowMore,
  onSelectFilters,
}) => {
  const isManyOptions = filterOptions.length > 10;
  if (isManyOptions) {
    filterOptions = filterOptions.slice(0, 9);
  }

  return (
    <div className="bg-white p-4 mb-4 w-full border border-gray-200 text-sm">
      <span className="uppercase font-medium">{getFilterHeading(heading)}</span>
      <ul className="mt-3">
        {filterOptions.map((item) => (
          <FilterOptionButton
            key={item.key}
            filterType={heading}
            title={item.key}
            count={item.doc_count}
            handleClick={onSelectFilters}
          />
        ))}
      </ul>
      {isManyOptions && (
        <button
          className="text-blue-700 font-light hover:text-blue-300 focus:text-blue-500 focus:outline-none"
          onClick={() => onClickShowMore(heading)}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default FilterCard;
