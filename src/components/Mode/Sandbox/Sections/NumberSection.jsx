import Number from "components/Number/Number";
import BaseSelector from "components/Settings/Base/BaseSelector";

import style from "./number-section.css";

const NumberSection = () => {

  return (
    <section className={style["number-section"]}>
      <BaseSelector base={"baseIn"} />
      <Number />
      <BaseSelector base={"baseOut"} />
    </section>
  );
};

export default NumberSection;
