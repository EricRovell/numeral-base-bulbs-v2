import { useModalContext } from "./context";

import CloseButton from "./CloseButton";
import style from "./modal.module.css";

const Modal = () => {

  const [ { open, title, contents }, dispatch ] = useModalContext();
  const modalVisibility = `${style["modal-backdrop"]} ${(!open) && style.close}`

  const close = () => {
    dispatch({ type: "switch" });
  };  

  return (
    <aside className={modalVisibility}>
      <div className={style.modal}>
        <CloseButton onCLick={close} />
        <h1>{title}</h1>
        {contents}
      </div>
    </aside>
  );
};

export default Modal;
