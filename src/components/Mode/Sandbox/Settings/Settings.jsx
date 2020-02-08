import { useReducer } from "react";

import Labels from "./Labels/Labels";
import Base from "./Base/Base";
import Digits from "./Digits/Digits";
import Representation from "./Representation/Representation";

import Button from "components/Settings/Controls/Button";

import defaultState from "../State/defaultState";

import style from "./settings.css";

const data = {
  title: "Reset to defaults",
};

const reducer = (state, action) => {
  return {
    ...state,
    ...action
  };
};

const SettingsSandbox = () => {

  const [ state, dispatch ] = useReducer(reducer, defaultState);

  return (    
    <form className={style.settings}>
      <Button data={data} />
      <Labels
        valueUp={state.labelsUp}
        valueDown={state.labelsDown}
        dispatch={dispatch} />
      <Base
        baseIn={state.baseIn}
        baseOut={state.baseOut} />
      <Digits />
      <Representation />
    </form>    
  );
};

export default SettingsSandbox;
