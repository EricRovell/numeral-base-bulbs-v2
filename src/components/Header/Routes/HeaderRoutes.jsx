import Link from "next/link";
import HeaderLink from "./HeaderLink";
import createRoutes from "./routes";

export default function Routes({ locale, handleClick, styles }) {
  return (
    <nav className={styles.navigation}>
      <ol>
      {createRoutes(locale).map(route => (
        <HeaderLink
          href={route.href}
          as={route.as}
          key={route.label}
          className={styles.section}
          activeClassName={styles.active}>
            <li>
              <a title={route.label} onClick={handleClick}>
                <span>{route.label}</span>
              </a>
              {(route.dropdown) && <svg viewBox="0 0 30.727 30.727"><path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0	l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/></svg>}
              {(route.dropdown) && <DropDown data={route.dropdown} />}
            </li>
        </HeaderLink>
      ))}
      </ol>
    </nav>
  );
};

function DropDown({ data }) {
  console.log(data);
  return (
    <ol>
      {data.map(route => (
        <Link
          href={route.href}
          as={route.as}
          key={route.label}>
            <li>
              <a title={route.label}>
                <span>{route.label}</span>
              </a>
            </li>
        </Link>
      ))}
    </ol>
  );
}
