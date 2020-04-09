import useLocale from "components/Hooks/useLocale"; 

import Tabs from "./Tabs/Tabs";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./Title/HeaderTitle";
import HeaderHelpers from "./Helpers/HeaderHelpers";

import createRoutes from "./routes";

import style from "./header.module.css";

const Routes = ({ routes }) => (
  <nav className={style.navigation}>
    <Tabs routes={routes} />
  </nav>
);

export default function Header() {

  const [ locale ] = useLocale("header.js");
  
  return locale && (
    <header className={style.header}>
      <HeaderLogo />
      <HeaderTitle title={locale.title} />
      <Routes routes={createRoutes(locale.routes)} />
      <HeaderHelpers locale={locale.helpers} />
    </header>
  );
};
