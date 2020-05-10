import dynamic from "next/dynamic";

import LoaderPuzzle from "components/Loaders/LoaderPuzzle/LoaderPuzzle";
import LoaderMessage from "components/Loaders/LoaderMessage/LoaderMessage";
import LoaderBrick from "components/Loaders/LoaderBrick/LoaderBrick";

export default function ArticlesDynamic({ route }) {
  const Article = dynamic(
    () => import(`articles/${route}.mdx`).catch(err => {
      return () => (
        <LoaderMessage message="Error 404">
          <LoaderBrick />
        </LoaderMessage>
      );
    }),
    { loading: () => <LoaderPuzzle /> }
  );

  return <Article />
};
