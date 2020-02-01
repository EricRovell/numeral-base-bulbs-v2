import Digits from "components/Digits/Digits";
import Switcher from "components/Digits/Switcher/Switcher";

import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";

import style from "./digits-section.css";

const DigitsSection = () => {

  const [ { digits } ] = useStateSandbox();

  return (
    <section className={style["digits-section"]}>
      <Switcher {...{ increment: 1 }} />
      <Digits digits={digits} />
      <Switcher {...{ increment: -1 }} />
    </section>
  );
};

export default DigitsSection;
