import InputDigit from "../InputDigit";

import style from "./basic.css";

export default ({ value, index }) => (
  <div className={style.basic}>
    <InputDigit
      value={value}
      index={index} />
  </div>
);
