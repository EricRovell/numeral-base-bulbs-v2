import useLocale from "components/Hooks/useLocale"; 

import HeaderLogo from "../HeaderLogo";
import HeaderTitle from "../Title/HeaderTitle";
import HeaderRoutes from "../Routes/HeaderRoutes";
import HeaderHelpers from "../Helpers/HeaderHelpers";

import MenuToggle from "../MenuToggle/MenuToggle";

import style from "./header.module.css";
import styles from "../Routes/navigation-menu.module.css";

export default function Header() {

  const [ locale ] = useLocale("header.js");
  
  return locale && (
    <header className={style.header}>
      <HeaderLogo />
      <HeaderTitle title={locale.title} />
      <HeaderRoutes locale={locale.routes} styles={styles} />
      <HeaderHelpers locale={locale.helpers} />
      <MenuToggle locale={locale} />
    </header>
  );
};
