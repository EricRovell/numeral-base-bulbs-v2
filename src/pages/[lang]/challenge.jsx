import { useStateContext } from "components/StateProvider/Context"; 
import Loading from "components/Loader/Loading/Loading";
import style from "style/pages/game.module.css";

const GamePage = ({ lang }) => {
  //const [ { lang } ] = useStateContext();
   

  return (
    <main className={style.game}>
      <Loading lang={lang} />
    </main>
  );
};

GamePage.getInitialProps = async ({ query: { lang }}) => {
  console.log(lang);
  return {
    lang: lang.toUpperCase()
  };
};

export default GamePage;
