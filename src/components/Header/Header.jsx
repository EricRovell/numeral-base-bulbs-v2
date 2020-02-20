import { useStateContext } from "components/StateProvider/Context"; 

import Tabs from "components/UI/Tabs/Tabs";
import routes from "./routes.js";
import HeaderLogo from "./HeaderLogo";

import style from "./header.module.css";

const Routes = ({ routes }) => {

  const [ { lang } ] = useStateContext(); 

  return (
    <nav className={style.navigation}>
      <Tabs
        routes={routes}
        lang={lang} />
    </nav>
  ); 
};

const Header = () => (
  <header className={style.header}>
    <HeaderLogo />
    <h1>Numeral Base Bulbs 2</h1>    
    <Routes routes={routes} />
  </header>
);

export default Header;
