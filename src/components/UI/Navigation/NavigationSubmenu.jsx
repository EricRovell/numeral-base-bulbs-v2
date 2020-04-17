import ActiveLink from "./ActiveLinkExact";
import Chevron from "./Chevron";

export default function NavigationSubmenu({ items, href, style, preventPropagation }) {

  if (items.nodes && items.nodes.length > 0) {
    return (
      <section>
        <input type="checkbox" id={items.label} />
        <label htmlFor={items.label} onClick={preventPropagation}>
          <Chevron />
          <span>{items.label}</span>
        </label>
        <ul>
          {items.nodes.map(item => (
            <li key={item.label}>
              <NavigationSubmenu
                items={item}
                href={href}
                preventPropagation={preventPropagation}
                style={style} />
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
}
