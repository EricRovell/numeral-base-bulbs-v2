import Label from "../../Label/Label";
import Incrementor from "../Incrementor/Incrementor";
import SwitchDigit from "../SwitchDigit";
import InputDigit from "../InputDigit";

import style from "./default.css";

export default ({ value, index, baseIn }) => (
  <div className={style.digit}>
    <div/>
    <Label
      index={index}
      type="labelsUp" />
    <Label 
      index={index}
      type="labelsDown" />
    <Incrementor {...{
      action: 1,
      index,
      value }} />
    <Incrementor {...{
      action: -1,
      index,
      value }} />
    {(baseIn === 2)
      ? <SwitchDigit
          index={index}
          value={value} />
      : <InputDigit
          baseIn={baseIn}
          value={value}
          index={index} />}
  </div>
);
