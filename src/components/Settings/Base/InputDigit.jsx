import { useState } from "react";

import style from "components/Number/number-input.module.css";

const InputDigit = ({ value, base, baseMin, baseMax, dispatch }) => {

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
      title="Set the number's base"
      type="text"
      inputMode={"numeric"}
      className={(isValidInput) ? null : style["number-input"]}
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputDigit;
