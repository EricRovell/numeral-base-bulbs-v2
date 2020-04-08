import Incrementor from "../Base/Incrementor";
import InputDigit from "../Base/InputDigit";

import style from "./base-selector.module.css";


const BaseSelector = ({ base, bases, baseMin, baseMax, dispatch, locale }) => {

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

export default BaseSelector;
