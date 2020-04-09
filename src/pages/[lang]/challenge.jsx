import { useRouter } from "next/router";
import Loading from "components/Loader/Loading/Loading";
import style from "style/pages/game.module.css";

export default function ChallengePage() {
  
  const { query: { lang }} = useRouter();

  const locale = (lang === "en")
    ? { message: "In development..." }
    : { message: "В разработке..." };

  return (
    <main className={style.game}>
      <Loading locale={locale}/>
    </main>
  );
}
