import Bulb from "./Bulb";
import style from "../digits.module.css";

const Bulbs = ({ digits, skin, baseIn, representation, dispatch }) => (
  <div className={style.container}>
    {digits.map((value, index) => (
      <Bulb
        skin={skin}
        value={value}
        index={index}
        baseIn={baseIn}
        representation={representation}
        dispatch={dispatch}
        key={`bulb-${index}`} />
    ))}
  </div>
);

export default Bulbs;
