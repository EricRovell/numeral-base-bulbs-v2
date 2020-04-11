import style from "./express-tab.module.css";

export default function ExpressTab({ label, title, handleClick }) {

  return (
    <div
      className={style["express-tab"]}
      onClick={handleClick}
      title={title}>
        {label}
    </div>
  );
}
