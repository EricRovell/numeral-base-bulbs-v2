import style from "./symbolic.css";

import Digit from "../Digit/Digit";

const Symbolic = ({ digits }) => (
  <div className={style.symbolic}>
    {digits.map((digit, index) => (
      <Digit
        value={digit}
        index={index}
        key={index} />
    ))}
  </div>
);

export default Symbolic;
