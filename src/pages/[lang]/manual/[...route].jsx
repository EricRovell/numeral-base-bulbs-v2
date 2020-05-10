import { useRouter } from "next/router";
import useLocale from "components/Hooks/useLocale";

import LayoutArticle from "components/Layout/Article/LayoutArticle";
import ArticlesDynamic from "domain/Article/ArticlesDynamic";

export default function manual() {

  const { query: { route }} = useRouter();
  const [ locale ] = useLocale("navigation-manual.js");

  return locale && (
    <LayoutArticle contents={locale} href={"/[lang]/manual/[...route]"}>      
      <ArticlesDynamic
        domain="manual"
        route={route.join("/")} />
    </LayoutArticle>
  ); 
}
