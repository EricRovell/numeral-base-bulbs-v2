import NumberInput from "./NumberInput";
import style from "./number.module.css";

const Number = ({ digits, digitsMax, baseIn, baseOut, dispatch, locale }) => (
  <div className={style.number}>
    <div />
    <button title={locale.increment} />
    <button title={locale.decrement} />
    <NumberInput {...{
      digits,
      digitsMax,
      baseIn,
      baseOut,
      dispatch,
      title: locale.input
    }} />
  </div>
);

export default Number;
