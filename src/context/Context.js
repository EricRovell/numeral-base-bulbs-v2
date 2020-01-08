import { createContext, useContext, useReducer } from "react";

export const Context = createContext(null);

export const StateProvider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useStateValue = () => useContext(Context);

export { default as initialState } from "./state.js";
export { default as reducer } from "./reducer.js";
