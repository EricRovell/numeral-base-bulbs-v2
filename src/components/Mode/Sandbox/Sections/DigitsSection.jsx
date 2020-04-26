import Digits from "components/Digits/Digits";
import BaseDigits from "components/Settings/BaseController/BaseDigits";

import style from "./digits-section.module.css";

export default function DigitsSection({ state, locale, dispatch }) {

  return (
    <section className={style["digits-section"]}>
      <Digits
        mode={state.mode}
        skin={state.skin}
        digits={state.digits}
        baseIn={state.baseIn}
        labelsUp={state.labelsUp}
        labelsDown={state.labelsDown}
        dispatch={dispatch}
        locale={locale.digits} />
      <BaseDigits
        base="baseIn"
        bases={{ baseIn: state.baseIn }}
        digits={state.digits}
        digitsMin={state.digitsMin}
        digitsMax={state.digitsMax}
        baseMin={state.baseMin}
        baseMax={state.baseMax}
        dispatch={dispatch}
        locale={locale.base} />
    </section>
  );
};
