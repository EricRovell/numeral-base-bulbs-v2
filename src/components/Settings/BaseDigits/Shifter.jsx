import { useStateContext } from "components/StateProvider/Context";
import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";

import ShifterIcon from "./ShifterIcon";
import translation from "./translation";

const Shifter = ({ increment }) => {

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
      onClick={addDigits}
      title={(increment == 1)
        ? translation.addDigit[lang]
        : translation.removeDigit[lang]}>
      <ShifterIcon />  
    </div>
  );
};

export default Shifter;
