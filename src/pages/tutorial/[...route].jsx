import { useRouter } from "next/router";

import LayoutArticle from "components/Layout/Article/LayoutArticle";
import tutorialMap from "tutorial/tutorial-map";
import Error from "pages/_error";


const Tutorial = () => {

  const { query: { route }} = useRouter();
  const path = route && route.join("/");

  if (route && tutorialMap()[path] === "undefined") {
    return Error;
  }

  return (
    <LayoutArticle>
      {route && tutorialMap()[path].mdx}
    </LayoutArticle>
  );
};

export default Tutorial;
