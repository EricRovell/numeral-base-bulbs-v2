import style from "./number.module.css";

import NumberInput from "./NumberInput";

const Number = () => {

  return (
    <div className={style.number}>
      <div></div>
      <button></button>
      <button></button>
      <NumberInput />
    </div>
  );
};

export default Number;
