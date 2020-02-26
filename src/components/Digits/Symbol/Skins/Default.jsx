import Label from "../../Label/Label";
import Incrementor from "../Incrementor/Incrementor";
import SwitchDigit from "../SwitchDigit";
import InputDigit from "../InputDigit";

import style from "./default.module.css";

export default ({ value, index, digits, baseIn, labelsUp, labelsDown, mode, dispatch }) => (
  <div className={style.digit}>
    <div/>
    <Label {...{
      type: "labelsUp",
      labelsUp,
      labelsDown,
      digits,
      index,
      baseIn,
      mode,
      dispatch
    }} />
    <Label {...{
      type: "labelsDown",
      labelsUp,
      labelsDown,
      digits,
      index,
      baseIn,
      mode,
      dispatch
    }} />
    <Incrementor {...{
      action: 1,
      index,
      value,
      baseIn,
      dispatch }} />
    <Incrementor {...{
      action: -1,
      index,
      value,
      baseIn,
      dispatch }} />
    {(baseIn === 2)
      ? <SwitchDigit
          index={index}
          value={value}
          dispatch={dispatch} />
      : <InputDigit
          baseIn={baseIn}
          value={value}
          index={index}
          dispatch={dispatch} />}
  </div>
);
