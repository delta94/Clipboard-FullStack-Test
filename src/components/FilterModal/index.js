import React, { useContext } from "react";
import { Store } from "../../context/storeContext";
import FilterOptionButton from "../FilterSection/FilterOptionButton";
import { getFilterHeading } from "../../utils/helper";
import { MODAL_TOGGLE } from "../../constants/actionTypes";

const FilterModal = () => {
  const { state, dispatch } = useContext(Store);
  const { modalFilterType, modalFilterOptions } = state;

  const onClose = () => {
    dispatch({ type: MODAL_TOGGLE, payload: {} });
  };

  return (
    <div className="absolute flex h-full w-full bg-opacity-25 bg-black">
      <div className="fixed flex h-screen w-full justify-center items-center">
        <div className="w-3/4 max-w-5xl bg-white rounded shadow-x1">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="uppercase text-lg font-bold">
              {getFilterHeading(modalFilterType)}
            </span>
            <button onClick={onClose} className="w-3 h-4 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
                <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
              </svg>
            </button>
          </div>
          <ul className="grid grid-cols-4 grid-flow-row gap-4 p-4 text-sm">
            {modalFilterOptions.map((item, index) => (
              <FilterOptionButton
                key={index}
                forModal={true}
                filterType={modalFilterType}
                title={item.key}
                count={item.doc_count}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
