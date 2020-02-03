import Symbol from "./Symbol";
import style from "../digits.css";

const Symbols = ({ digits, skin, baseIn, dispatch }) => (
  <div className={style.container}>
    {digits.map((digit, index) => (
      <Symbol
        value={digit}
        index={index}
        skin={skin}
        baseIn={baseIn}
        dispatch={dispatch}
        key={index} />
    ))}
  </div>
);

export default Symbols;
