import React, { createContext, useReducer } from "react";
import storeReducer from "./storeReducer";

const initialState = {
  search: "", //search keyword
  sort: {}, //selected sort options
  filter: {}, //selected filter options
  modal: false, //modal visible
  modalFilterType: "", //filter type for modal
  modalFilterOptions: [], //filter options for modal
};

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;
