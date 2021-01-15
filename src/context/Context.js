import React, { createContext, useReducer } from "react";
import reducer from "./storeReducer";

const initialState = {
  search: "",
  sort: {},
  filter: {},
  modal: false,
  modalFilterType: "",
  modalFilterOptions: [],
};

export const Store = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default Store;
