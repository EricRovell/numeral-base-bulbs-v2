import style from "./warning-modal.module.css";

export default function WarningModal({ title, message }) {
  return (
    <div className={style["warning-modal"]}>
      <header>{title}</header>
      <p>{message}</p>
    </div>
  );
}