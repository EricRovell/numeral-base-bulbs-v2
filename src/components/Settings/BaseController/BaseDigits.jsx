import Incrementor from "./subcomponents/Incrementor";
import InputDigit from "./subcomponents/InputDigit";
import Shifter from "./subcomponents/Shifter";

import style from "./base-digits.module.css";

export default function BaseDigits({ type, baseIn, baseMin, baseMax, dispatch, locale }) {
  return (
    <div className={style["base-digits"]}>
      <div>{/* I am a wrapper... */}</div>
      <Shifter
        action={-1}
        dispatch={dispatch}
        title={locale.removeSymbol} />
      <Shifter
        action={1}
        dispatch={dispatch}
        title={locale.addSymbol} />
      <Incrementor
        action={-1}
        base={type}
        value={baseIn}
        dispatch={dispatch}
        title={locale.decrementBase} />
      <Incrementor
        action={1}
        base={type}
        value={baseIn}
        dispatch={dispatch}
        title={locale.incrementBase} />
      <InputDigit
        type={type}
        value={baseIn}
        baseMin={baseMin}
        baseMax={baseMax}
        dispatch={dispatch}
        title={locale.input} />
    </div>
  );
};
