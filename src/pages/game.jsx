import { useStateContext } from "components/StateProvider/Context"; 
import Loading from "components/Loader/Loading/Loading";
import style from "style/pages/game.module.css";

const GamePage = () => {
  const [ { lang } ] = useStateContext(); 

  return (
    <main className={style.game}>
      <Loading lang={lang} />
    </main>
  );
};

export default GamePage;
