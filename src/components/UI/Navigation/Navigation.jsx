import NavigationSubmenu from "./NavigationSubmenu";
import style from "./navigation.module.css";

const Navigation = ({ items, href, preventPropagation }) => {

  if (!items) return <nav />

  return (
    <nav className={style.navigation}>
      {items.map(item => (
        <NavigationSubmenu
          items={item}
          href={href}
          style={style}
          preventPropagation={preventPropagation}
          key={item.label} />
      ))}
    </nav>
  );
};

export default Navigation;
