import Incrementor from "../Base/Incrementor";
import InputDigit from "../Base/InputDigit";
import Shifter from "./Shifter";

import style from "./base-digits.module.css";

const BaseSelector = ({ digits, digitsMin, digitsMax, base, bases, baseMin, baseMax, dispatch, locale }) => {

  return (
    <div className={style["base-digits"]}>
      <div>{/* I am a wrapper... */}</div>
      <Shifter
        increment={-1}
        digits={digits}
        digitsMin={digitsMin}
        digitsMax={digitsMax}
        dispatch={dispatch}
        title={locale.removeSymbol} />
      <Shifter
        increment={1}
        digits={digits}
        digitsMin={digitsMin}
        digitsMax={digitsMax}
        dispatch={dispatch}
        title={locale.addSymbol} />
      <Incrementor {...{
        actionType: -1,
        base,
        value: bases[base]  ,
        baseMin,
        baseMax,
        dispatch,
        title: locale.incrementBase
      }} />
      <Incrementor {...{
        actionType: 1,
        base,
        value: bases[base],
        baseMin,
        baseMax,
        dispatch,
        title: locale.decrementBase
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
