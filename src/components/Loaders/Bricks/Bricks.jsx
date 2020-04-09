import style from "./bricks.module.css";

export default function Bricks() {
  return (
    <div className={style.wrapper}>
      <div className={style.bricks}>
        <div className={style.shadow} />
        <div className={style.brick} />
      </div>
      <h3>Sorry, but this page is nonexistent...</h3>
    </div>
  );
}
