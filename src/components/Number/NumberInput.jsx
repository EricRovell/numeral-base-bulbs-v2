import { useStateContext } from "components/StateProvider/Context"; 
import { useState } from "react";

import { baseConvert } from "utility/baseConvert";

const NumberInput = () => {

  const [ { digits, baseIn, baseOut }, dispatch ] = useStateContext();
  const [ inputValue, setInputValue ] = useState(0);

  const regex = /^[A-Z\d]+$/;

  const handleInput = ({ target: { value }}) => {
    if (value === "") setInputValue(0);

    if (regex.test(value)) {
      setInputValue(value);
    }    
  };

  const convertedValue = baseConvert({
    digits,
    baseIn,
    baseOut
  });

  return (
    <input type="text" onChange={handleInput} value={convertedValue} />
  );
};

export default NumberInput;
