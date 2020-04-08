import style from "./label.module.css";

export default function LabelType({ typeValue, trueIndex, baseIn, mode, locale }) {

  const title = locale[typeValue];

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
          {locale[typeValue]}
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
