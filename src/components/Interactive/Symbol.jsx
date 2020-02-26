import { useReducer } from "react";

import Digits from "components/Digits/Digits";
import defaultState from "./State/StateDigit";
import reducer from "components/Mode/Sandbox/State/reducer";

export default () => {

  const [ state, dispatch ] = useReducer(reducer, defaultState);

  return (
    <Digits {...{
      ...state,
      dispatch
    }} />
  );
};
