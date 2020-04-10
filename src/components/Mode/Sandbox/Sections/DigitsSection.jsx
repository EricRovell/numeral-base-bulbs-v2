import Digits from "components/Digits/Digits";
import BaseDigits from "components/Settings/BaseController/BaseDigits";

import style from "./digits-section.module.css";

export default function DigitsSection({ state, locale, dispatch }) {

  const {
    digits,
    baseIn,
    baseMin,
    baseMax,
    digitsMin,
    digitsMax
  } = state;

  return (
    <section className={style["digits-section"]}>
      <Digits {...{ ...state, locale: locale.digits, dispatch }} />
      <BaseDigits {...{
        base: "baseIn",
        bases: { baseIn },
        digits,
        digitsMin,
        digitsMax,
        baseMin,
        baseMax,
        dispatch,
        locale: locale.base
      }} />
    </section>
  );
};
