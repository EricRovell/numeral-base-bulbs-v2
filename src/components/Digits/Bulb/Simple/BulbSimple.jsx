import BulbSVG from "./BulbSVG";
import Label from "../../Digit/Label/Label";

import style from "./bulb-simple.css";

const BulbSimple = ({ value, index, dispatch }) => {

  return (
    <div className={style["bulb-simple"]}>
      <Label index={index} type={"labelsUp"} />
      <BulbSVG index={index} dispatch={dispatch} value={value} />
      <Label index={index} type={"labelsDown"} />
    </div>
  );
};

export default BulbSimple;
