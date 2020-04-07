import { useRouter } from "next/router";
import Loading from "components/Loader/Loading/Loading";
import style from "style/pages/game.module.css";

export default function ChallengePage() {
  
  const { query: { lang }} = useRouter();

  return (
    <main className={style.game}>
      <Loading lang={lang && lang.toUpperCase()} />
    </main>
  );
};
