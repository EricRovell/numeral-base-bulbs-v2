import NumberInput from "./NumberInput";
import Incrementor from "./NumberIncrementor";
import WrongInput from "./WrongInput";
import style from "./number.module.css";

export default function Number({ digits, digitsMax, baseIn, baseOut, dispatch, locale }) {

  return (
    <div className={style.number}>
      <div /* I am a wrapper */ />
      <Incrementor 
        action={-1}
        className={style.incrementor}
        title={locale.decrement}
        dispatch={dispatch} />
      <Incrementor
        className={style.incrementor}
        title={locale.increment}
        dispatch={dispatch} />
      {
        (baseIn && baseOut)
          ? <NumberInput
              digits={digits}
              digitsMax={digitsMax}
              baseIn={baseIn}
              baseOut={baseOut}
              dispatch={dispatch}
              locale={{
                title: locale.input,
                placeholder: locale.placeholder }} />
          : <WrongInput
              className={style["wrong-input"]}
              message={locale.wrongInputMessage}
              tip={locale.wrongInputTip} />
      }
    </div>
  );
}
