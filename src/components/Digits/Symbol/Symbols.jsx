import Symbol from "./Symbol";
import style from "../digits.module.css";

const Symbols = (props) => (
  <div className={style.container}>
    {props.digits.map((digit, index) => (
      <Symbol
        value={digit}
        index={index}
        key={index}
        {...props} />
    ))}
  </div>
);

export default Symbols;
