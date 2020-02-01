import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";

import Number from "components/Number/Number";
import BaseSelector from "components/Settings/Base/BaseSelector";

import style from "./number-section.css";

const NumberSection = () => {

  const [ { baseIn, baseOut, baseMin, baseMax }, dispatch ] = useStateSandbox();

  return (
    <section className={style["number-section"]}>
      <BaseSelector {...{
        base: "baseIn",
        bases: { baseIn, baseOut },
        baseMin,
        baseMax,
        dispatch
      }} />
      <Number />
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
