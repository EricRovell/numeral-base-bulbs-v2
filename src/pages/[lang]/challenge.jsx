import { useRouter } from "next/router";
import LoaderLoading from "components/Loaders/LoaderLoading/LoaderLoading";
import style from "style/pages/game.module.css";

export default function ChallengePage() {
  
  const { query: { lang }} = useRouter();

  const locale = (lang === "en")
    ? { message: "In development..." }
    : { message: "В разработке..." };

  return (
    <main className={style.game}>
      <LoaderLoading locale={locale}/>
    </main>
  );
}
