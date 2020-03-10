import Link from "./Link";
import style from "./tabs.module.css";

const Tabs = ({ routes, lang }) => {

  return (
    <>
      {routes.map(route => (
        <Link
          href={route.path}
          as={route.as}
          key={route.name["EN"]}
          className={style.section}
          activeClassName={style["section-active"]}>
            <a title={route.name[lang]}>
              {route.name[lang]}
            </a>
        </Link>
      ))}
    </>
  );
};

export default Tabs;
