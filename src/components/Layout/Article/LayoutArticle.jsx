import Navigation from "components/UI/Navigation/Navigation";
import NavigationMobile from "components/UI/Navigation/NavigationMobile";
import Article from "./Article";

import style from "./layout-article.module.css";

export default function LayoutArticle({ children, contents, href }) {
  return (
    <main className={style["layout-article"]}>
      <Navigation
        data={contents}
        href={href} />
      <NavigationMobile
        className={style.toggle}
        data={contents}
        href={href} />
      <Article>
        {children}
      </Article>
    </main>
  );
}
