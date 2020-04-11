import HeaderRoutes from "../Routes/HeaderRoutes";
import HeaderHelpers from "../Helpers/HeaderHelpers";

import style from "./mobile-menu.module.css";
import styles from "./mobile-menu-routes.module.css";

export default function MobileMenu({ locale, closeModal }) {

  return (
    <div className={style["mobile-menu"]} onClick={closeModal}>
      <HeaderRoutes
        locale={locale.routes}
        styles={styles}
        handleClick={closeModal} />
      <HeaderHelpers locale={locale.helpers} />
      <div onClick={closeModal}>
        CLOSE
      </div>
    </div>
  );
}
