import { useStateContext } from "components/StateProvider/Context";
import useLocale from "./routes/useLocale"; 

import Tabs from "./Tabs/Tabs";
import HeaderLogo from "./HeaderLogo";
import HeaderTitle from "./HeaderTitle";
import HeaderSwitch from "./Switch/HeaderSwitch";

import style from "./header.module.css";

const Routes = ({ routes }) => (
  <nav className={style.navigation}>
    {routes && <Tabs routes={routes} />}
  </nav>
);

const Header = () => {

  const [ { lang } ] = useStateContext();
  const routes = useLocale(lang.toLowerCase());
  
  return (
    <header className={style.header}>
      <HeaderLogo />
      <HeaderTitle />  
      <Routes routes={routes && routes} />
      <HeaderSwitch />
    </header>
  );
};

export default Header;
