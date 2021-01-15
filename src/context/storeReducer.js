import {
  SELECT_FILTER_OPTION,
  SELECT_SORT_OPTION,
  SEARCH_INPUT,
  MODAL_TOGGLE,
} from "../constants/actionTypes";

const storeReducer = (state, action) => {
  const { filter, sort } = state;

  switch (action.type) {
    case SELECT_FILTER_OPTION:
      const { filterType, filterOption } = action.payload;
      if (filter[filterType]) {
        const newSelectedFilters = filter[filterType].includes(filterOption)
          ? {
              ...filter,
              [filterType]: filter[filterType].filter(
                (item) => item !== filterOption
              ),
            }
          : {
              ...filter,
              [filterType]: [...filter[filterType], filterOption],
            };
        return { ...state, filter: { ...newSelectedFilters } };
      } else {
        const newSelectedFilters = {
          ...filter,
          [filterType]: [filterOption],
        };
        return { ...state, filter: { ...newSelectedFilters } };
      }

    case SELECT_SORT_OPTION:
      const { title, sortOrder } = action.payload;
      const newSelectedSortOptions = {
        ...sort,
        [title]: sortOrder,
      };
      return { ...state, sort: newSelectedSortOptions };

    case SEARCH_INPUT:
      const { search } = action.payload;
      return { ...state, search };

    case MODAL_TOGGLE:
      const { modalFilterType, modalFilterOptions } = action.payload;
      return {
        ...state,
        modal: !state.modal,
        modalFilterType,
        modalFilterOptions,
      };
  }
};

export default storeReducer;
