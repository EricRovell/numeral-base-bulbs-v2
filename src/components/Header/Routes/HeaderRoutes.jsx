import Link from "./Link";
import createRoutes from "./routes";

export default function Routes({ locale, handleClick, styles }) {
  return (
    <nav className={styles.navigation}>
      {createRoutes(locale).map(route => (
        <Link
          href={route.href}
          as={route.as}
          key={route.label}
          className={styles.section}
          activeClassName={styles["section-active"]}>
            <a title={route.label} onClick={handleClick}>
              <span>{route.label}</span>
            </a>
        </Link>
      ))}
    </nav>
  );
};
