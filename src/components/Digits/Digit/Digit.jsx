import Label from "./Label/Label";
import Incrementor from "./Incrementor";
import InputDigit from "./InputDigit";

import style from "./digit.css";


const Digit = ({ value, index }) => {

  return (
    <div className={style.digit}>
      <div/>
      <Label index={index} type={"labelsUp"} />
      <Label index={index} type={"labelsDown"} />
      <Incrementor {...{ actionType: 1, index, value }} />
      <Incrementor {...{ actionType: -1, index, value }} />
      <InputDigit value={value} index={index} />
    </div>
  );
};

export default Digit;
