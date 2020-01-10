import { useStateContext } from "components/StateProvider/Context"; 

import Digit from "./Digit/Digit";

import style from "./digits.css";

const Digits = () => {

  const [ { digits }, dispatch ] = useStateContext();

  return (
    <div className={style.digits}>
      {digits.map(digit => (
        <Digit value={digit} />
      ))}
    </div>
  )
};

export default Digits;
