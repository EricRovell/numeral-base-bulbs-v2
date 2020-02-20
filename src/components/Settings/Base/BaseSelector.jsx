import Incrementor from "../Base/Incrementor";
import InputDigit from "../Base/InputDigit";

import style from "./base-selector.module.css";


const BaseSelector = ({ base, bases, baseMin, baseMax, dispatch }) => {

  return (
    <div className={style["base-selector"]}>
      <div>{/* I am a wrapper... */}</div>
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
