import ActiveLink from "./ActiveLinkExact";
import Chevron from "./Chevron";

import style from "./navigation.module.css";

const SubMenu = ({ items, href }) => {

  if (items.nodes && items.nodes.length > 0) {
    return (
      <section>
        <input type="checkbox" id={items.label} defaultChecked />
        <label htmlFor={items.label}>
          <Chevron />
          <span>{items.label}</span>
        </label>        
        <ul>
          {items.nodes.map(item => (
            <li key={item.label}>
              <SubMenu items={item} href={href} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (    
    <ActiveLink
      href={href}
      as={items.href}
      className={style["navigation-link"]}
      activeClassName={style["navigation-link-active"]}>
        <a title={items.label}>
          {items.label}
        </a>
    </ActiveLink>
  );
};

const Navigation = ({ items, href }) => {

  if (!items) return <nav />

  return (
    <nav className={style.navigation}>
      {items.map(item => (
        <SubMenu
          items={item}
          href={href}
          key={item.label} />
      ))}
    </nav>
  );
};

export default Navigation;
