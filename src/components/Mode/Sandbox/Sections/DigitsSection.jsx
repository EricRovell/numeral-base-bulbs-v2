import Digits from "components/Digits/Digits";
//import BaseSelector from "components/Settings/Base/BaseSelector";
import BaseDigits from "components/Settings/BaseDigits/BaseDigits";

import style from "./digits-section.module.css";

const DigitsSection = ({ state, locale, dispatch }) => {

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

export default DigitsSection;
