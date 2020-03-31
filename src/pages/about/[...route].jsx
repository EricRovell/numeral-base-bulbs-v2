import dynamic from "next/dynamic";

import LayoutArticle from "components/Layout/Article/LayoutArticle";
import Loader from "components/Loader/Loader";
import Error from "pages/_error";

const Articles = ({ route }) => {
  // dynamically import mdx components from "tutorial/..."
  const Article = dynamic(
    () => import(`articles/about/${route}.mdx`).catch(err => {
      return () => <Error />
    }),
    { loading: () => <Loader /> }
  );
  return <Article />
};

const About = ({ route, contents }) => (
  <LayoutArticle contents={contents} href={"/about/[...route]"}>      
    <Articles route={route} />
  </LayoutArticle>
);

About.getInitialProps = async ({ query: { route }}) => {
  // if lang will be needed as prop, it should be upperCase
  //const lang = route[0].toUpperCase();

  // dynamically importing contents data in required language
  const lang = route[0];
  const contents = (await import(
    `articles/about/_map/about-map-${lang}`
  )).default;
  
  return {
    route: route.join("/"),
    contents
  };
};

export default About;

