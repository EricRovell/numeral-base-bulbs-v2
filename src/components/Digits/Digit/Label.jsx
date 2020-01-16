import { useStateContext } from "components/StateProvider/Context"; 

const Label = ({ index, type }) => {

  const [ { digits, labelsUp, labelsDown, baseIn }, dispatch ] = useStateContext();

  const trueIndex = digits.length - index - 1;
  
  const renderValue = () => {
    const mode = (type === "up")
      ? labelsUp
      : labelsDown

    switch (mode) {
      case "index":
        return trueIndex;
      case "value":
      default:
        return baseIn ** trueIndex;
    }
  }

  return (
    <span title={baseIn ** trueIndex}>
      {renderValue()}
    </span>
  );
};

export default Label;
