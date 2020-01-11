import style from "./switcher.css";

import { useStateContext } from "components/StateProvider/Context"; 

const Switcher = ({ increment, title }) => {

  const [ { digits, digitsMin, digitsMax }, dispatch ] = useStateContext();

  const addDigits = () => {
    // prevent adding more digits than allowed
    if (increment === 1) {
      if (digits.length >= digitsMax) {
        return;
      }
    }

    // prevent removing more digits than allowed
    if (increment === -1) {
      if (digits.length <= digitsMin) {
        return;
      }
    }

    dispatch({
      type: "addDigit",
      value: increment,
    });
  };
  
  return (
    <div className={style.switcher} onClick={addDigits} title={title}>
      <div>
        <span></span>
      </div>      
    </div>
  );
};

export default Switcher;
