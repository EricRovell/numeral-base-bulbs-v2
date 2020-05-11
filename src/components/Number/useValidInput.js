import { useState, useEffect } from "react";
import { baseRegExp } from "utility/validateInput";
import { baseConvert } from "utility/baseConvert";

export default function({ base, baseIn, digitsMax }) {
  // useInputCheck custom hook
  //   wrontInput (boolean): if the input correct
  //   regex literal for current radix
  //   max allowed value
  const [ wrongInput, setWrongInput ] = useState(false);
  const [ regex, setRegex ] = useState(baseRegExp(base));
  const [ maxValue, setMaxValue ] = useState(
    baseConvert({
      digits: new Array(digitsMax).fill(baseIn - 1),
      baseIn,
      baseOut: base,
    }).join("")
  );
  
  useEffect(() => {
    setMaxValue(
      baseConvert({
        digits: new Array(digitsMax).fill(baseIn - 1),
        baseIn,
        baseOut: base,
      }).join(""))
  }, [ base, baseIn, digitsMax ]);
  
  useEffect(() => {
    setRegex(baseRegExp(base))
  }, [ base ]);

  const invalidate = () => {
    event.preventDefault();
    setWrongInput(true);
    setTimeout(() => {
      setWrongInput(false);
    }, 820);
  };

  const validate = value => {

    if (!regex.test(value)) {
      invalidate();
      return false;
    }

    const convBase = (baseIn > 10) ? baseIn : 10;
    if (parseInt(value, base) > parseInt(maxValue, convBase)) {
      invalidate();
      return false;
    }
    
    return true;
  }

  return [ wrongInput, validate ];
};
