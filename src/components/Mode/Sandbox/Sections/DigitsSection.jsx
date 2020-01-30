import Digits from "components/Digits/Digits";
import Switcher from "components/Digits/Switcher/Switcher";

import { useStateContext } from "components/StateProvider/Context";

import style from "./digits-section.css";

const DigitsSection = () => {

  const [ { digits }, dispatch ] = useStateContext();

  return (
    <section className={style["digits-section"]}>
      <Switcher increment={1} />
      <Digits digits={digits} />
      <Switcher increment={-1} />
    </section>
  );
};

export default DigitsSection;
