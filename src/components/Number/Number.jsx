import style from "./number.css";

import { useState } from "react";

const Number = () => {

  const [ inputValue, setInputValue ] = useState(0);
  const regex = /^[A-Z\d]+$/;

  const handleInput = ({ target: { value }}) => {
    if (value === "") setInputValue(0);

    if (regex.test(value)) {
      setInputValue(value);
    }    
  };

  return (
    <div className={style.number}>
      <div></div>
      <button></button>
      <button></button>
      <input type="text" onInput={handleInput} value={inputValue} />
      {/* <span data-base={12}>{inputValue}</span> */}
    </div>
  );
};

export default Number;
