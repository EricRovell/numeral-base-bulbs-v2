import NavChevron from "./Chevron";
import NavSection from "./NavSection";
import ActiveLink from "./ActiveLinkExact";

import style from "./navigation.module.css";

export default function Navigation({ data, href }) {
  return (
    <nav className={style.navigation}>
      <NavChevron />
      <header>Contents</header>
      {data.map(section => (
        <NavSection key={section.title} title={section.title} className={style.section}>
          {section.contents.map(link => (
            <ActiveLink
              key={link.title}
              href={href}
              as={link.href}
              className={style.link}
              activeClassName={style["link-active"]}>
                <a title={link.title}>
                  {link.title}
                </a>
            </ActiveLink>
          ))}
        </NavSection>
      ))}
    </nav>
  );
}
