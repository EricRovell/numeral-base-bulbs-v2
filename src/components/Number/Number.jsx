import NumberInput from "./NumberInput";
import style from "./number.module.css";

const Number = ({ digits, baseIn, baseOut, dispatch }) => {

  return (
    <div className={style.number}>
      <div />
      <button />
      <button />
      <NumberInput {...{
        digits,
        baseIn,
        baseOut,
        dispatch
      }} />
    </div>
  );
};

export default Number;
