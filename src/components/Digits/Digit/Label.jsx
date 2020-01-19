import { useStateContext } from "components/StateProvider/Context";

import style from "./label.css";

const nextMode = mode => {
  switch (mode) {
    case "none":
      return "index";
    case "index":
      return "value";
    case "value":
      return "power";
    case "power":
      return "none"; 
  };
};

const LabelType = ({ mode, trueIndex, baseIn }) => {
  switch (mode) {
    case "value":
      return (
        <span title={baseIn ** trueIndex}>
          {baseIn ** trueIndex}
        </span>
      );
    case "power":
      return (
        <span title={baseIn ** trueIndex}>
          {trueIndex}
          <i>{baseIn}</i>
        </span>
      );
    case "none":
      return (
        <span title={"Click me to set the label."} />
      );    
    case "index":    
    default:
      return (
        <span title={trueIndex}>
          {trueIndex}
        </span>
      );
  }
}

const Label = ({ index, type }) => {

  const [ { digits, labelsUp, labelsDown, baseIn }, dispatch ] = useStateContext();
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
    <div className={style.label} onClick={handleClick}>
      <LabelType {...{ mode, trueIndex, baseIn}} />
    </div>
  );
};

export default Label;
