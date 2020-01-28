import Label from "../../Label/Label";
import Incrementor from "../Incrementor/Incrementor";
import InputDigit from "../InputDigit";

import style from "./default.css";

export default ({ value, index }) => (
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
    <InputDigit
      value={value}
      index={index} />
  </div>
);
