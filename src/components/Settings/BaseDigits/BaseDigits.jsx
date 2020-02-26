import Incrementor from "../Base/Incrementor";
import InputDigit from "../Base/InputDigit";
import Shifter from "./Shifter";

import style from "./base-digits.module.css";

const BaseSelector = ({ digits, digitsMin, digitsMax, base, bases, baseMin, baseMax, dispatch }) => {

  return (
    <div className={style["base-digits"]}>
      <div>{/* I am a wrapper... */}</div>
      <Shifter
        increment={-1}
        digits={digits}
        digitsMin={digitsMin}
        digitsMax={digitsMax}
        dispatch={dispatch} />
      <Shifter
        increment={1}
        digits={digits}
        digitsMin={digitsMin}
        digitsMax={digitsMax}
        dispatch={dispatch} />
      <Incrementor {...{
        actionType: -1,
        base,
        value: bases[base]  ,
        baseMin,
        baseMax,
        dispatch       
      }} />
      <Incrementor {...{
        actionType: 1,
        base,
        value: bases[base],
        baseMin,
        baseMax,
        dispatch 
      }} />
      <InputDigit
        {...{
          value: bases[base],
          base,
          baseMin,
          baseMax,
          dispatch
        }} />
    </div>
  );
};

export default BaseSelector;
