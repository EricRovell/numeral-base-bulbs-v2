import { useState } from "react";

import style from "components/Number/number-input.module.css";

export default function InputDigit({ value, base, baseMin, baseMax, dispatch, title }) {
  
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
      title={title}
      type="text"
      inputMode={"numeric"}
      className={(isValidInput) ? null : style["number-input"]}
      onChange={handleChange}
      value={value}
    />
  );
};
