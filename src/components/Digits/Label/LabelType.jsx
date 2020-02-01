import { useStateContext } from "components/StateProvider/Context";
import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox"; 
import translations from "./translations";

import style from "./label.css";

const LabelType = ({ mode, trueIndex }) => {

  const [ { lang }, _ ] = useStateContext();
  const [ { baseIn, mode: representation }, dispatch ] = useStateSandbox();
  const title = translations[mode][lang];

  switch (mode) {
    case "value":
      return (
        <span
          title={`${title}: ${baseIn ** trueIndex}`}
          className={style.label}>
          {baseIn ** trueIndex}
        </span>
      );
    case "power":
      return (
        <span
          title={`${title}: ${baseIn ** trueIndex}`}
          className={style.label}>
          {trueIndex}
          <i>{baseIn}</i>
        </span>
      );
    case "none":
      return (
        <span
          title={title}
          className={`
            ${style["label"]}
            ${style["label-none"]}
            ${(representation === "symbol") ? style["label-none-transparent"] : null}`}>
          {translations[mode][lang]}
        </span>
      );    
    case "index":    
    default:
      return (
        <span
          title={`${title}: ${trueIndex}`}
          className={style.label}>
          {trueIndex}
        </span>
      );
  }
};

export default LabelType;
