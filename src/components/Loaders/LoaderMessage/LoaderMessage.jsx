import style from "./loader-message.module.css";

export default function LoaderMessage({ children, message }) {
  return (
    <div className={style.wrapper}>
      {children}
      <h3>{message}</h3>
    </div>
  );
}
