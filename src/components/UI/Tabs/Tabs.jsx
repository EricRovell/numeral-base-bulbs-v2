import Link from "./Link";
import style from "./tabs.css";

const Tabs = ({ routes, lang }) => {

  return (
    <>
      {routes.map(route => (
        <Link
          href={route.path}
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
