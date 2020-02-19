import { useRouter } from "next/router";

import LayoutArticle from "components/Layout/Article/LayoutArticle";

// pages
import NumeralBases from "tutorial/numeral-bases.mdx";
import NonPositional from "tutorial/non-positional.mdx";

const Article = () => ({
  "numeral-bases": <NumeralBases />,
  "non-positional": <NonPositional />
});

const NumeralBasesPage = () => {

  const { query: { route }} = useRouter();
  console.log(route);

  return (
    <LayoutArticle>
      {Article()[route]}
    </LayoutArticle>
  );
};

export default NumeralBasesPage;
