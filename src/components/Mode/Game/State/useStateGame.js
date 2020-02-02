import { createContext, useContext, useReducer } from "react";

export const Context = createContext(null);

export const StateProvider = ({ reducer, defaultState, children }) => (
  <Context.Provider value={useReducer(reducer, defaultState)}>
    {children}
  </Context.Provider>
);

export const useStateGame = () => useContext(Context);

export { default as defaultState } from "./defaultState.js";
export { default as reducer } from "./reducer.js";
