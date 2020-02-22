import LayoutArticle from "components/Layout/Article/LayoutArticle";
import TutorialWelcome from "tutorial/welcome.mdx";

import { useStateContext } from "components/StateProvider/Context"; 

const TutorialPage = () => {
  
  const [ { lang } ] = useStateContext(); 

  return (
    <LayoutArticle>
      <TutorialWelcome />
    </LayoutArticle>
  );
};

export default TutorialPage;
