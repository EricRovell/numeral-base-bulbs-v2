import { useState } from "react"; 
import { baseRegExp } from "utility/validateInput";

import style from "components/Number/number-input.module.css";

const InputDigit = ({ index, value, baseIn, title, dispatch }) => {
  
  const [ wrongInput, setWrongInput ] = useState(false);
  const regex = baseRegExp(baseIn);
  
  const handleChange = event => {
    const userInput = event.target.value;

    if (!regex.test(userInput)) {
      setWrongInput(true);
      setTimeout(() => {
        setWrongInput(false);
      }, 820);
      return;
    }

    dispatch({
      type: "mutateDigit",
      index,
      value: +userInput,
    });
  };

  const digit2char = () => (
    (value > 9 && value <= 36)
      ? String.fromCharCode(value + 55)
      : value
  );

  const onFocusSelectAll = event => {
    event.target.select();
  };

  return (
    <input
      type="text"
      title={title}
      className={(wrongInput) ? style["number-input"] : null}
      onChange={handleChange}
      onFocus={onFocusSelectAll}
      value={digit2char()}
      maxLength={1}
    />
  );
};

export default InputDigit;
