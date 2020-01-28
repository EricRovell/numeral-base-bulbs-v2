import Bulb from "./Bulb";
import style from "../digits.css";

const Bulbs = ({ digits, skin, dispatch }) => (
  <div className={style.container}>
    {digits.map((value, index) => (
      <Bulb
        skin={skin}
        value={value}
        index={index}
        dispatch={dispatch}
        key={`bulb-${index}`} />
    ))}
  </div>
);

export default Bulbs;
