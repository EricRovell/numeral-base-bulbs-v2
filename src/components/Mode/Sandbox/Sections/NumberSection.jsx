import Number from "components/Number/Number";
import BaseSelector from "components/Settings/Base/BaseSelector";

import style from "./number-section.module.css";

const NumberSection = ({ state, dispatch }) => {

  const { digits, baseIn, baseOut, baseMin, baseMax } = state;

  return (
    <section className={style["number-section"]}>
      <Number {...{
        digits,
        baseIn,
        baseOut,
        baseMin,
        baseMax,
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
