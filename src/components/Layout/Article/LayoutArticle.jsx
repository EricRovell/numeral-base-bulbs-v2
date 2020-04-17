import Navigation from "components/UI/Navigation/Navigation";
import NavigationMobileToggle from "components/UI/Navigation/NavigationMobileToggle"
import Article from "./Article";

import style from "./layout-article.module.css";

const LayoutArticle = ({ children, contents, href }) => (
  <main className={style["layout-article"]}>
    <Navigation items={contents} href={href} />
    <NavigationMobileToggle items={contents} href={href} />
    <Article>
      {children}
    </Article>
  </main>
);

export default LayoutArticle;
