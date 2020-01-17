import { useStateContext } from "components/StateProvider/Context"; 

import Label from "./Label";
import Incrementor from "./Incrementor";
import InputDigit from "./InputDigit";

import style from "./digit.css";


const Digit = ({ value, index }) => {

  const [ { digits, labelsUp, labelsDown, representation }, dispatch ] = useStateContext(); 

  return (
    <div className={style.digit}>
      <div></div>
      <Label index={index} type={"up"} />
      <Label index={index} type={"down"} />
      <Incrementor {...{ actionType: 1, index, value }} />
      <Incrementor {...{ actionType: -1, index, value }} />
      <InputDigit value={value} index={index} />
    </div>
  );
};

export default Digit;
