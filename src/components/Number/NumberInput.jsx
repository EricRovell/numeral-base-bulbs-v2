import { useStateContext } from "components/StateProvider/Context"; 
import { useState, useEffect } from "react";

import { baseConvert } from "utility/baseConvert";

const NumberInput = () => {

  const [ { digits, baseIn, baseOut }, dispatch ] = useStateContext();

  const [ value, setValue ] = useState(0);

  useEffect(() => {

    const convertedValue = baseConvert({
      digits: digits.join(""),
      baseIn,
      baseOut,
      representation: "symbol"
    }).join("");

    console.log(convertedValue);
    setValue(convertedValue);
  }, [ digits, baseIn, baseOut ]);

  const regex = /^[A-Z\d]+$/;

  const handleChange = event => {
    
    const inputValue = event.target.value;
    if (inputValue === "") {
      dispatch({
        type: "setDigits",
        digits: []
      });
    };
    
    if (regex.test(inputValue)) {
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
    }  
  };

  return (
    <input type="text" onChange={handleChange} value={value} />
  );
};

export default NumberInput;
