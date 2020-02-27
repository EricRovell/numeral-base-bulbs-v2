import ActiveLink from "./ActiveLinkExact";
import Chevron from "./Chevron";

import style from "./navigation.module.css";

const SubMenu = ({ items }) => {

  if (items.nodes && items.nodes.length > 0) {
    return (
      <section>
        <input type="checkbox" id={items.label} />
        <label htmlFor={items.label}>
          <Chevron />
          <span>{items.label}</span>
        </label>        
        <ul>
          {items.nodes.map(item => (
            <li key={item.label}>
              <SubMenu items={item} />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (    
    <ActiveLink
      href={items.href}
      className={style["navigation-link"]}
      activeClassName={style["navigation-link-active"]}>
        <a title={items.label}>
          {items.label}
        </a>
    </ActiveLink>
  );
};

const Navigation = ({ items }) => {

  if (!items) return <nav />

  return (
    <nav className={style.navigation}>
      {items.map(item => (
        <SubMenu
          items={item}
          key={item.label} />
      ))}
    </nav>
  );
};

export default Navigation;
