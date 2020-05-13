import NumberInput from "./NumberInput";
import Incrementor from "./NumberIncrementor";
import style from "./number.module.css";

export default function Number({ digits, digitsMax, baseIn, baseOut, dispatch, locale }) {

  return (
    <div className={style.number}>
      <div /* I am a wrapper */ />
      <Incrementor 
        action={-1}
        className={style.incrementor} 
        dispatch={dispatch} />
      <Incrementor 
        className={style.incrementor} 
        dispatch={dispatch} />
      <NumberInput
        digits={digits}
        digitsMax={digitsMax}
        baseIn={baseIn}
        baseOut={baseOut}
        dispatch={dispatch}
        locale={{
          title: locale.input,
          placeholder: locale.placeholder
        }} />
    </div>
  );
}
