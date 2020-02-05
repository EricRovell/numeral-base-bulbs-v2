import style from "./shifter.css";

import { useStateContext } from "components/StateProvider/Context";
import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";
import translation from "./translation";

const Switcher = ({ increment }) => {

  const [ { lang }, _ ] = useStateContext();
  const [ { digits, digitsMin, digitsMax }, dispatch ] = useStateSandbox();

  const addDigits = () => {
    // prevent adding more digits than allowed
    if (increment === 1) {
      if (digits.length >= digitsMax) {
        alert(translation.maxDigitsAlert[lang]);
        return;
      }
    }

    // prevent removing more digits than allowed
    if (increment === -1) {
      if (digits.length <= digitsMin) {
        alert(translation.minDigitsAlert[lang]);
        return;
      }
    }

    dispatch({
      type: "addDigit",
      value: increment,
    });
  };
  
  return (
    <div
      className={style.switcher}
      onClick={addDigits}
      title={(increment == 1)
        ? translation.addDigit[lang]
        : translation.removeDigit[lang]}>
      <span>
        {(increment === 1) ? "+1" : "-1"}
      </span>    
    </div>
  );
};

export default Switcher;
