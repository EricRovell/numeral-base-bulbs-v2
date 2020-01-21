import { useStateContext } from "components/StateProvider/Context";
import translations from "./translations";

const LabelType = ({ mode, trueIndex }) => {

  const [ { lang, baseIn }, dispatch ] = useStateContext();
  const title = translations[mode][lang];

  switch (mode) {
    case "value":
      return (
        <span title={`${title}: ${baseIn ** trueIndex}`}>
          {baseIn ** trueIndex}
        </span>
      );
    case "power":
      return (
        <span title={`${title}: ${baseIn ** trueIndex}`}>
          {trueIndex}
          <i>{baseIn}</i>
        </span>
      );
    case "none":
      return (
        <span title={title} />
      );    
    case "index":    
    default:
      return (
        <span title={`${title}: ${trueIndex}`}>
          {trueIndex}
        </span>
      );
  }
};

export default LabelType;
