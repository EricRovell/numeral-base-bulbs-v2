import { useStateContext } from "components/StateProvider/Context"; 
import { useState, useEffect } from "react";

import { baseConvert } from "utility/baseConvert";
import { baseRegExp } from "utility/validateInput";

import style from "./number-input.css";

const NumberInput = () => {

  const [ { digits, baseIn, baseOut }, dispatch ] = useStateContext();

  const [ value, setValue ] = useState(0);
  const [ wrongInput, setWrongInput ] = useState(false);

  useEffect(() => {

    const convertedValue = baseConvert({
      digits: digits,
      baseIn,
      baseOut,
      representation: "numeral"
    }).join("");

    setValue(convertedValue);
  }, [ digits, baseIn, baseOut ]);

  const regex = baseRegExp(baseOut);

  const handleChange = event => {
    
    const inputValue = event.target.value;

    if (inputValue === "") {
      dispatch({
        type: "setDigits",
        digits: []
      });
    };

    if (!regex.test(inputValue)) {
      setWrongInput(true);
      setTimeout(() => {
        setWrongInput(false);
      }, 820);
      return;
    }    
    
    setValue(inputValue);

    dispatch({
      type: "setDigits",
      digits: baseConvert({
        digits: inputValue,
        baseIn: baseOut,
        baseOut: baseIn,
        representation: "symbol",
      })
    }); 
  };

  return (
    <input
      type="text"
      onChange={handleChange}
      value={value}
      className={(wrongInput) ? style["number-input"] : ""} />
  );
};

export default NumberInput;
