import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox"; 

import LabelType from "./LabelType";
import nextMode from "./nextMode";

import style from "./label.module.css";


const Label = ({ index, type }) => {

  const [ {digits, labelsUp, labelsDown }, dispatch ] = useStateSandbox();
  const trueIndex = digits.length - index - 1;

  const mode = (type === "labelsUp")
    ? labelsUp
    : labelsDown;

  const handleClick = () => {
    dispatch({
      type: "setLabel",
      label: type,
      value: nextMode(mode)
    });
  };

  return (
    <div className={style["label-container"]} onClick={handleClick}>
      <LabelType {...{ mode, trueIndex }} />
    </div>
  );
};

export default Label;