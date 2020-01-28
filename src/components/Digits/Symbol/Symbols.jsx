import Symbol from "./Symbol";
import style from "../digits.css";

const Symbols = ({ digits, skin }) => (
  <div className={style.container}>
    {digits.map((digit, index) => (
      <Symbol
        value={digit}
        index={index}
        skin={skin}
        key={index} />
    ))}
  </div>
);

export default Symbols;
