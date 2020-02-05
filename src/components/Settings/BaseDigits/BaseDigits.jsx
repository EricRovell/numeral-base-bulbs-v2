import Incrementor from "../Base/Incrementor";
import InputDigit from "../Base/InputDigit";
import Shifter from "./Shifter";

import style from "./base-digits.css";

const BaseSelector = ({ base, bases, baseMin, baseMax, dispatch }) => {

  return (
    <div className={style["base-digits"]}>
      <div>{/* I am a wrapper... */}</div>
      <Shifter increment={-1} />
      <Shifter increment={1} />
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
      <InputDigit value={bases[base]} base={base} />
    </div>
  );
};

export default BaseSelector;
