import { useRouter } from "next/router";
import useLocale from "components/Hooks/useLocale";

import LayoutArticle from "components/Layout/Article/LayoutArticle";
import ArticlesDynamic from "domain/Article/ArticlesDynamic";

export default function AboutPage() {

  const { query: { route }} = useRouter();
  const [ locale ] = useLocale("navigation/navigation-about.js");

  return locale && (
    <LayoutArticle contents={locale} href={"/[lang]/about/[...route]"}>      
      <ArticlesDynamic
        domain="about"
        route={route.join("/")} />
    </LayoutArticle>
  );  
}
