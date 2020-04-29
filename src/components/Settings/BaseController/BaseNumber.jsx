import Incrementor from "./subcomponents/Incrementor";
import InputDigit from "./subcomponents/InputDigit";

import style from "./base-number.module.css";

export default function BaseNumber({ type, baseOut, baseMin, baseMax, dispatch, locale }) {
  return (
    <div className={style["base-selector"]}>
      <div>{/* I am a wrapper... */}</div>
      <Incrementor
        action={-1}
        base={type}
        value={baseOut}
        dispatch={dispatch}
        title={locale.decrementBase} />
      <Incrementor
        action={1}
        base={type}
        value={baseOut}
        dispatch={dispatch}
        title={locale.incrementBase} />
      <InputDigit
        type={type}
        value={baseOut}
        baseMin={baseMin}
        baseMax={baseMax}
        dispatch={dispatch}
        title={locale.input} />
    </div>
  );
};
