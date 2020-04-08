import Label from "../../Label/Label";
import Incrementor from "../Incrementor/Incrementor";
import SwitchDigit from "../SwitchDigit";
import InputDigit from "../InputDigit";

import style from "./default.module.css";

export default ({ value, index, digits, baseIn, labelsUp, labelsDown, mode, dispatch, locale }) => (
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
      dispatch,
      locale: locale.label
    }} />
    <Label {...{
      type: "labelsDown",
      labelsUp,
      labelsDown,
      digits,
      index,
      baseIn,
      mode,
      dispatch,
      locale: locale.label
    }} />
    <Incrementor {...{
      action: 1,
      index,
      value,
      baseIn,
      dispatch,
      title: locale.increment
    }} />
    <Incrementor {...{
      action: -1,
      index,
      value,
      baseIn,
      dispatch,
      title: locale.decrement
    }} />
    {(baseIn === 2)
      ? <SwitchDigit
          title={locale.switch}
          index={index}
          value={value}
          dispatch={dispatch} />
      : <InputDigit
          title={locale.input}
          baseIn={baseIn}
          value={value}
          index={index}
          dispatch={dispatch} />}
  </div>
);
