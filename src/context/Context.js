import React, { createContext, useReducer } from "react";

const initialState = {
  search: [],
  sort: [],
  filter: [],
};

const Context = createContext(initialState);

export ContextProvider = ({children})=>{
  const [search, setSearch] = useState([])
}

export default Context;
