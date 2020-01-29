import { useStateContext } from "components/StateProvider/Context";
import { useState } from "react"; 
import { baseRegExp } from "utility/validateInput";

//import { useValidInput } from "components/customHook/useValidInput"; 

import style from "components/Number/number-input.css";

const InputDigit = ({ index, value }) => {

  const [ { baseIn }, dispatch ] = useStateContext();

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

  return (
    <input
      type="text"
      className={(wrongInput) ? style["number-input"] : null}
      onChange={handleChange}
      value={digit2char()}
      maxLength={1}
    />
  );
};

export default InputDigit;
