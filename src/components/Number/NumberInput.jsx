import { useState, useEffect } from "react";
import useValidInput from "./useValidInput";
import { baseConvert, digits2chars } from "utility/baseConvert";

import style from "./number-input.module.css";

const NumberInput = ({ digits, digitsMax, baseIn, baseOut, dispatch, locale }) => {  
  // storing number's state as array of digits (integers)
  // initial state is converted from digits to baseOut
  const [ number, setNumber ] = useState(
    baseConvert({ digits, baseIn, baseOut })
  );

  const [ wrongInput, validate ] = useValidInput({
    base: baseOut,
    baseIn,
    digitsMax
  });

  // two-way data binding
  // changing the number, we mutate the digits
  // mutating digits change the number by side-effect
  useEffect(() => {
    setNumber(
      baseConvert({ digits, baseIn, baseOut })
    );
  }, [ digits, baseIn, baseOut ]);

  const handleChange = (event) => {

    if (event.target.value === "") {
      dispatch({
        type: "setDigits",
        digits: []
      });
    }

    if (!validate(event.target.value)) {
      return;
    }

    dispatch({
      type: "setDigits",
      digits: baseConvert({
        digits: event.target.value,
        baseIn: baseOut,
        baseOut: baseIn,
        representation: "numeral"
      })
    });
  }

  return (
    <input
      type="text"
      title={locale.title}
      className={(wrongInput) ? style["number-input"] : ""}
      inputMode={(baseOut >= 1 && baseOut <= 10) ? "numeric" : "text"}
      placeholder={locale.placeholder}
      onChange={handleChange}
      value={
        (!baseIn || !baseOut)
          ? "42"
          : (baseOut > 10)
          ? digits2chars([ ...number ]).join("")
          : [ ...number ].join("")
      } />
  );
};

export default NumberInput;
