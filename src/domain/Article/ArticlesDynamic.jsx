import dynamic from "next/dynamic";

import Loader from "components/Loader/Loader";
import Bricks from "components/Loaders/Bricks/Bricks";
//import Error from "pages/_error";

export default function ArticlesDynamic({ domain, route }) {
  const Article = dynamic(
    () => import(`articles/${domain}/${route}.mdx`).catch(err => {
      return () => <Bricks />;
    }),
    { loading: () => <Loader /> }
  );

  return <Article />
};
