import Number from "components/Number/Number";
import BaseNumber from "components/Settings/BaseController/BaseNumber";

import style from "./number-section.module.css";

export default function NumberSection({ state, locale, dispatch }) {

  const { digits, digitsMax, baseIn, baseOut, baseMin, baseMax } = state;

  return (
    <section className={style["number-section"]}>
      <Number
        digits={digits}
        baseIn={baseIn}
        baseOut={baseOut}
        digitsMax={digitsMax}
        dispatch={dispatch}
        locale={locale.number} />
      <BaseNumber
        type="baseOut"
        baseOut={baseOut}
        baseMin={baseMin}
        baseMax={baseMax}
        dispatch={dispatch}
        locale={locale.base} />
    </section>
  );
};
