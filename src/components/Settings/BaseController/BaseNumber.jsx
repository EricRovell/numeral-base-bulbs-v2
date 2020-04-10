import Incrementor from "./subcomponents/Incrementor";
import InputDigit from "./subcomponents/InputDigit";

import style from "./base-number.module.css";

export default function BaseNumber({ base, bases, baseMin, baseMax, dispatch, locale }) {
  return (
    <div className={style["base-selector"]}>
      <div>{/* I am a wrapper... */}</div>
      <Incrementor {...{
          actionType: -1,
          base,
          value: bases[base],
          baseMin,
          baseMax,
          dispatch,
          title: locale.decrementBase
        }} />
      <Incrementor {...{
        actionType: 1,
        base,
        value: bases[base],
        baseMin,
        baseMax,
        dispatch,
        title: locale.incrementBase
      }} />
      <InputDigit
        {...{
          value: bases[base],
          base,
          baseMin,
          baseMax,
          dispatch,
          title: locale.input
        }} />
    </div>
  );
};
