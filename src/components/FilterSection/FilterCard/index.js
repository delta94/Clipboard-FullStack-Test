import React, { useContext } from "react";
import { Store } from "../../../context/storeContext";
import FilterOptionButton from "../FilterOptionButton";
import { getFilterHeading } from "../../../utils/helper";
import { MODAL_TOGGLE } from "../../../constants/actionTypes";

const FilterCard = ({ filterType, filterOptions }) => {
  const { dispatch } = useContext(Store);
  const isShowMore = filterOptions.length > 10;

  const onShowMoreClick = () => {
    dispatch({
      type: MODAL_TOGGLE,
      payload: {
        modalFilterType: filterType,
        modalFilterOptions: filterOptions,
      },
    });
  };

  return (
    <div className="bg-white p-4 mb-4 w-full border border-gray-200 text-sm">
      <span className="uppercase font-medium">
        {getFilterHeading(filterType)}
      </span>
      <ul className="mt-3">
        {filterOptions.map((item, index) => {
          if (index < 10)
            return (
              <FilterOptionButton
                key={item.key}
                forModal={false}
                filterType={filterType}
                title={item.key}
                count={item.doc_count}
              />
            );
        })}
      </ul>
      {isShowMore && (
        <button
          className="text-blue-700 font-light hover:text-blue-300 focus:text-blue-500 focus:outline-none"
          onClick={onShowMoreClick}
        >
          Show more
        </button>
      )}
    </div>
  );
};

export default FilterCard;
