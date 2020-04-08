import LabelType from "./LabelType";
import nextMode from "./nextMode";

import style from "./label.module.css";


const Label = ({ index, type, labelsUp, labelsDown, digits, baseIn, mode, locale, dispatch }) => {

  const trueIndex = digits.length - index - 1;

  const typeValue = (type === "labelsUp")
    ? labelsUp
    : labelsDown;

  const handleClick = () => {
    dispatch({
      type: "setLabel",
      label: type,
      value: nextMode(typeValue)
    });
  };

  return (
    <div className={style["label-container"]} onClick={handleClick}>
      <LabelType {...{ typeValue, trueIndex, baseIn, mode, locale }} />
    </div>
  );
};

export default Label;