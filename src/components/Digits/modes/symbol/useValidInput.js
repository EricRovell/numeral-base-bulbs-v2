import { useState, useEffect } from "react";
import { baseRegExp } from "utility/validateInput";

export default function useValidInput({ baseIn }) {
  // useInputCheck custom hook
  //   wrontInput (boolean): if the input correct
  //   regex literal for current radix
  //   max allowed value
  const [ wrongInput, setWrongInput ] = useState(false);
  const [ regex, setRegex ] = useState(baseRegExp(baseIn));
  
  useEffect(() => {
    setRegex(baseRegExp(baseIn))
  }, [ baseIn ]);

  const invalidate = () => {
    event.preventDefault();
    setWrongInput(true);
    setTimeout(() => {
      setWrongInput(false);
    }, 820);
  };

  const validate = value => {
    // validating key by regex
    if (!regex.test(value)) {
      invalidate();
      return false;
    }
    
    return true;
  }

  return [ wrongInput, validate ];
};
