import { useStateContext } from "components/StateProvider/Context";
import translations from "./translations";

import style from "./label.module.css";

const LabelType = ({ typeValue, trueIndex, baseIn, mode }) => {

  const [ { lang } ] = useStateContext();
  const title = translations[typeValue][lang];

  switch (typeValue) {
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
            ${(mode === "symbol") ? style["label-none-transparent"] : null}`}>
          {translations[typeValue][lang]}
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
