import style from "./label.module.css";

export default function LabelType({ value, index, baseIn, locale }) {

  const title = locale[value];

  switch (value) {
    case "value":
      return (
        <span
          title={`${title}: ${baseIn ** index}`}
          className={style.label}>
          {baseIn ** index}
        </span>
      );
    case "power":
      return (
        <span
          title={`${title}: ${baseIn ** index}`}
          className={style.label}>
          {index}
          <i>{baseIn}</i>
        </span>
      );   
    case "index":
    default:
      return (
        <span
          title={`${title}: ${index}`}
          className={style.label}>
          {index}
        </span>
      );
  }
};
