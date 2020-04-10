import style from "./loader-brick.module.css";

export default function LoaderBrick() {
  return (
    <div className={style.loader}>
      <div className={style.shadow} />
      <div className={style.brick} />
    </div>    
  );
}
