import style from "./switcher.css";

import { useStateContext } from "components/StateProvider/Context";
import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";

const translation = {
  maxDigitsAlert: {
    "EN": "Sorry, the limit has been reached for the number of digits.",
    "RU": "К сожалению, исчерпан лимит количества символов."
  },
  minDigitsAlert: {
    "EN": "Sorry, there are no digits to be removed.",
    "RU": "К сожалению, больше нет цифр."
  },
  addDigit: {
    "EN": "Add a digit!",
    "RU": "Добавить цифру!"
  },
  removeDigit: {
    "EN": "Remove a digit!",
    "RU": "Убрать цифру!"
  }
}

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
      <div>
        <span></span>
      </div>      
    </div>
  );
};

export default Switcher;
