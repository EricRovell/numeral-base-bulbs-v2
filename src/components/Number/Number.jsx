import style from "./number.css";

import NumberInput from "./NumberInput";

const Number = () => {

  return (
    <div className={style.number}>
      <div></div>
      <button></button>
      <button></button>
      <NumberInput />
      {/* <span data-base={12}>{inputValue}</span> */}
    </div>
  );
};

export default Number;
