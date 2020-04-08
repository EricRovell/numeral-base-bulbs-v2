import { useReducer } from "react";

import Digits from "components/Digits/Digits";
import Number from "components/Number/Number";

import defaultState from "./State/StateSandboxMini";
import reducer from "components/Mode/Sandbox/State/reducer";

import style from "./sandbox-lite.module.css";

export default ({ locale, ...rest }) => {

  const [ state, dispatch ] = useReducer(reducer, {...defaultState, ...rest});

  return (
    <div className={style["sandbox-lite"]}>
      <Digits {...{ ...state, locale: locale.digits, dispatch }} />
      <Number {...{ ...state, locale: locale.number, dispatch }} />
    </div>
  );
};
