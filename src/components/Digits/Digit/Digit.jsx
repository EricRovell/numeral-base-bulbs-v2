import Label from "./Label";
import Incrementor from "./Incrementor";
import InputDigit from "./InputDigit";

import style from "./digit.css";


const Digit = ({ value }) => {

  return (
    <div className={style.digit}>
      <div></div>
      <Label />
      <Label />
      <Incrementor />
      <Incrementor />
      <InputDigit value={value} />
    </div>
  );
};

export default Digit;
