import { createContext, useContext, useReducer } from "react";

const modalState = {
  open: false,
  contents: (
    <div>
      Hello!
    </div>
  )
};

const modalReducer = (state, action) => {
  switch (action.type) {

    case "switch":
      return {
        ...state,
        open: !state.open
      };

    case "show":
      return {
        open: true,
        ...action
      };

    default:
      return state;
  }
};

export const Context = createContext(null);

export default ({ children }) => (
  <Context.Provider value={useReducer(modalReducer, modalState)}>
    {children}
  </Context.Provider>
);

export const useModalContext = () => useContext(Context);
