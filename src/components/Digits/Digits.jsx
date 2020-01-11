import { useStateContext } from "components/StateProvider/Context"; 

import Digit from "./Digit/Digit";
import EmptyState from "./EmptyState/EmptyState";

import style from "./digits.css";

const Digits = () => {

  const [ { digits }, dispatch ] = useStateContext();

  const Numerals = ({ digits }) => (
    <div className={style.digits}>
      {digits.map(digit => (
        <Digit value={digit} />
      ))}
    </div>
  );

  return (
    (digits.length)
      ? <Numerals digits={digits} />
      : <EmptyState />
  );
};

export default Digits;
