import { useStateContext } from "components/StateProvider/Context"; 

import Label from "./Label";
import Incrementor from "./Incrementor";
import InputDigit from "./InputDigit";

import style from "./base-selector.css";


const BaseSelector = ({ base, text }) => {

  const [ { baseIn, baseOut }, dispatch ] = useStateContext();
  
  const bases = {
    baseIn,
    baseOut
  };

  return (
    <div className={style["base-selector"]}>
      <div>{/* I am a wrapper... */}</div>
      <Label text={"Base"} />
      <Label text={text} />
      <Incrementor {...{
          actionType: 1,
          base,
          value: bases[base]        
        }} />
      <Incrementor {...{
        actionType: -1,
        base,
        value: bases[base] 
      }} />
      <InputDigit value={bases[base]} />
    </div>
  );
};

export default BaseSelector;