import Number from "components/Number/Number";
import BaseSelector from "components/Settings/Base/BaseSelector";

import style from "./number-section.module.css";

const NumberSection = ({ state, dispatch }) => {

  const { digits, digitsMax, baseIn, baseOut, baseMin, baseMax } = state;

  return (
    <section className={style["number-section"]}>
      <Number {...{
        digits,
        baseIn,
        baseOut,
        digitsMax,
        dispatch
      }} />
      <BaseSelector {...{
        base: "baseOut",
        bases: { baseIn, baseOut },
        baseMin,
        baseMax,
        dispatch
      }} />
    </section>
  );
};

export default NumberSection;
