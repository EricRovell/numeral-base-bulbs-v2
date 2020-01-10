import { createContext, useContext, useReducer } from "react";

export const Context = createContext(null);

export const StateProvider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useStateContext = () => useContext(Context);

export { default as initialState } from "./initialState.js";
export { default as reducer } from "./reducer.js";
