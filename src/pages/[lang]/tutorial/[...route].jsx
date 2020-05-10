import { useRouter } from "next/router";
import useLocale from "components/Hooks/useLocale";

import LayoutArticle from "components/Layout/Article/LayoutArticle";
import ArticlesDynamic from "domain/Article/ArticlesDynamic";

export default function Tutorial() {

  const { query: { route }} = useRouter();
  const [ locale ] = useLocale("navigation-tutorial.js");

  return locale && (
    <LayoutArticle contents={locale} href={"/[lang]/tutorial/[...route]"}>      
      <ArticlesDynamic
        domain="tutorial"
        route={route.join("/")} />
    </LayoutArticle>
  ); 
}
