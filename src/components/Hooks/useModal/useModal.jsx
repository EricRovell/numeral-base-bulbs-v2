import { useModalContext } from "./useModalContext";

import style from "./modal.module.css";

export default function Modal() {

  const [ { open, contents }, dispatch ] = useModalContext();
  const modalVisibility = `${style.backdrop} ${(!open) && style.close}`;

  const closeModal = event => {
    event.stopPropagation();
    dispatch({ type: "switch" })
  };

  return (
    <aside className={modalVisibility} onClick={closeModal}>
      {contents}
    </aside>
  );
}
