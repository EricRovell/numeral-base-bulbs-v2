import style from "./express-tab.module.css";

export default function ExpressTab({ title, handleClick }) {

  return (
    <div className={style["express-tab"]} onClick={handleClick}>
      {title}
    </div>
  );
}
