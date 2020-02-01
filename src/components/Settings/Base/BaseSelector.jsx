import Label from "./Label";
import Incrementor from "./Incrementor";
import InputDigit from "./InputDigit";

import style from "./base-selector.css";


const BaseSelector = ({ base, bases, baseMin, baseMax, dispatch }) => {

  return (
    <div className={style["base-selector"]}>
      <div>{/* I am a wrapper... */}</div>
      <Label text={"Base"} />
      <Label text={(base === "baseIn") ? "in" : "out"} />
      <Incrementor {...{
          actionType: 1,
          base,
          value: bases[base]  ,
          baseMin,
          baseMax,
          dispatch       
        }} />
      <Incrementor {...{
        actionType: -1,
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
