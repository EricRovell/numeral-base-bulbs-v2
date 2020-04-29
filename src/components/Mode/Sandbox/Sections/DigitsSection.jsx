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
        dispatch={dispatch}
        locale={locale.digits}
        labelsUp={{
          show: state.labelsUpShow,
          mode: state.labelsUpMode }}
        labelsDown={{
          show: state.labelsDownShow,
          mode: state.labelsDownMode }} />
      <BaseDigits
        type="baseIn"
        baseIn={state.baseIn}
        baseMin={state.baseMin}
        baseMax={state.baseMax}
        dispatch={dispatch}
        locale={locale.base} />
    </section>
  );
};
