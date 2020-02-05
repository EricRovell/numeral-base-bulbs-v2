import Digits from "components/Digits/Digits";
//import BaseSelector from "components/Settings/Base/BaseSelector";
import BaseDigits from "components/Settings/BaseDigits/BaseDigits";

import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";

import style from "./digits-section.css";

const DigitsSection = () => {

  const [ { digits, baseIn, baseMin, baseMax }, dispatch ] = useStateSandbox();

  return (
    <section className={style["digits-section"]}>
      <Digits digits={digits} />
      <BaseDigits {...{
        base: "baseIn",
        bases: { baseIn },
        baseMin,
        baseMax,
        dispatch
      }} />
    </section>
  );
};

export default DigitsSection;
