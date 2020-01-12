import { useStateContext } from "components/StateProvider/Context"; 

import Label from "./Label";
import Incrementor from "./Incrementor";
import InputDigit from "./InputDigit";

import style from "./digit.css";


const Digit = ({ value, index }) => {

  //const [ { baseIn }, dispatch ] = useStateContext(); 

  return (
    <div className={style.digit}>
      <div></div>
      <Label />
      <Label />
      <Incrementor actionType={1} index={index} value={value} />
      <Incrementor actionType={-1} index={index} value={value} />
      <InputDigit value={value} />
    </div>
  );
};

export default Digit;
