import Navigation from "components/UI/Navigation/Navigation";
/* import NavigationMobileToggle from "components/UI/Navigation/NavigationMobileToggle" */
import Article from "./Article";

import style from "./layout-article.module.css";

export default function LayoutArticle({ children, contents, href }) {
  return (
    <main className={style["layout-article"]}>
      <Navigation data={contents} href={href} />
      {/* <NavigationMobileToggle items={contents} href={href} /> */}
      <Article>
        {children}
      </Article>
    </main>
  );
}
