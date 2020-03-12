import NumberInput from "./NumberInput";
import style from "./number.module.css";

const Number = ({ digits, digitsMax, baseIn, baseOut, dispatch }) => (
  <div className={style.number}>
    <div />
    <button />
    <button />
    <NumberInput {...{
      digits,
      digitsMax,
      baseIn,
      baseOut,
      dispatch
    }} />
  </div>
);

export default Number;
