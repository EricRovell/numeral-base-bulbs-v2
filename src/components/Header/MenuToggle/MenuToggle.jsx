import { useEffect } from "react";
import { useModalContext } from "components/Hooks/useModal/useModalContext";
import MobileMenu from "../MobileMenu/MobileMenu";
import style from "./menu-toggle.module.css";

export default function HeaderMobileToggle({ locale }) {

  const [ { open }, dispatch ] = useModalContext();

  const closeModal = () => {
    dispatch({ type: "switch" });
  };

  const openModal = () => {
    dispatch({
      type: "show",
      contents: (
        <MobileMenu
          closeModal={closeModal}
          locale={locale} />
      )
    });
  };

  useEffect(() => {
    if (open) {
      // update if opened only
      openModal();
    }
  }, [ locale ]);

  return (
    <div onClick={openModal} className={style["header-toggle"]}>
      <span />
      <span />
      <span />
    </div>
  );
}
