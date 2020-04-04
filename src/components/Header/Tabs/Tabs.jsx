import Link from "./Link";
import style from "./tabs.module.css";

const Tabs = ({ routes }) => (
  <>
    {routes.map(route => (
      <Link
        href={route.href}
        as={route.as}
        key={route.label}
        className={style.section}
        activeClassName={style["section-active"]}>
          <a title={route.label}>
            {route.label}
          </a>
      </Link>
    ))}
  </>
);

export default Tabs;
