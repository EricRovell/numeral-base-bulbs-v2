import { useStateContext } from "components/StateProvider/Context";
import useLocale from "./routes/useLocale"; 

import Tabs from "./Tabs/Tabs";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./Title/HeaderTitle";
import HeaderHelpers from "./Helpers/HeaderHelpers";

import routes from "./routes";

import style from "./header.module.css";

const Routes = ({ routes }) => (
  <nav className={style.navigation}>
    <Tabs routes={routes} />
  </nav>
);

export default function Header() {

  const [ { lang } ] = useStateContext();
  const locale = useLocale(lang.toLowerCase());
  
  return locale && (
    <header className={style.header}>
      <HeaderLogo />
      <HeaderTitle title={locale.title} />  
      <Routes routes={routes(locale.routes)} />
      <HeaderHelpers locale={locale.helpers} />
    </header>
  );
};
