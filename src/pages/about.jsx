import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import LayoutArticle from "components/Layout/Article/LayoutArticle";

const AboutArticle = ({ lang }) => {
  const Article =  dynamic(
    () => import(`tutorial/about-${lang}.mdx`).catch(err => {
      return () => <Error />
    })
  );
  return <Article />
};

const AboutPage = () => {

  const { asPath } = useRouter();
  const lang = asPath.split("/")[2];
  
  return (
    <LayoutArticle>
      <AboutArticle lang={lang} />
    </LayoutArticle>
  );
};

export default AboutPage;
