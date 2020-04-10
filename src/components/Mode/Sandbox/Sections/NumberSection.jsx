import Number from "components/Number/Number";
import BaseNumber from "components/Settings/BaseController/BaseNumber";

import style from "./number-section.module.css";

export default function NumberSection({ state, locale, dispatch }) {

  const { digits, digitsMax, baseIn, baseOut, baseMin, baseMax } = state;

  return (
    <section className={style["number-section"]}>
      <Number {...{
        digits,
        baseIn,
        baseOut,
        digitsMax,
        dispatch,
        locale: locale.number
      }} />
      <BaseNumber {...{
        base: "baseOut",
        bases: { baseIn, baseOut },
        baseMin,
        baseMax,
        dispatch,
        locale: locale.base
      }} />
    </section>
  );
};
