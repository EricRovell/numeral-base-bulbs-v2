import ExpressSettings from "components/Settings/ExpressSettings/ExpressSettings";

import Link from "./Link.js";
import routes from "./routes.js";

import style from "./header.css";

const Routes = ({ routes }) => (
  <nav className={style.navigation}>
    {routes.map(route => (
      <Link
        href={route.path}
        key={route.name["EN"]}
        className={style.section}
        activeClassName={style["section-active"]}>
          <a title={route.name["EN"]}>
            {route.name["EN"]}
          </a>
      </Link>
    ))}
  </nav>
);

const Header = () => (
  <header className={style.header}>
    <h1>Numeral Base Bulbs 2</h1>
    <Routes routes={routes} />
    <ExpressSettings />
  </header>
);

export default Header;
