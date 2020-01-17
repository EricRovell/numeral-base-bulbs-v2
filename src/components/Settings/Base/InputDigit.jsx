import { useStateContext } from "components/StateProvider/Context"; 
import { useState } from "react";

import style from "components/Number/number-input.css";

const InputDigit = ({ base, value }) => {

  const [ { baseMin, baseMax }, dispatch ] = useStateContext();
  const [ isValidInput, setIsValidInput ] = useState(true);

  const handleChange = event => {
    const userInput = +event.target.value;

    if (Number.isNaN(userInput) || userInput < baseMin || userInput > baseMax) {
      setIsValidInput(false);
      setTimeout(() => {
        setIsValidInput(true);
      }, 820);
      return;
    }

    dispatch({
      type: "setBase",
      base,
      value: userInput
    });
  };

  return (
    <input
      type="text"
      inputMode={"numeric"}
      className={(isValidInput) ? null : style["number-input"]}
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputDigit;
