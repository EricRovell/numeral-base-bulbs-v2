import SwitchDigit from "../SwitchDigit";
import InputDigit from "../InputDigit";

import style from "./basic.css";

export default (props) => (
  <div className={style.basic}>
    {(props.baseIn === 2)
      ? <SwitchDigit {...props} />
      : <InputDigit {...props} />
    }      
  </div>
);
