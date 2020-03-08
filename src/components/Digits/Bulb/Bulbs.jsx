import Bulb from "./Bulb";
import style from "../digits.module.css";

const Bulbs = props => (
  <div className={style.container}>
    {props.digits.map((value, index) => (
      <Bulb    
        value={value}
        index={index}    
        key={`bulb-${index}`}
        {...props} />
    ))}
  </div>
);

export default Bulbs;
