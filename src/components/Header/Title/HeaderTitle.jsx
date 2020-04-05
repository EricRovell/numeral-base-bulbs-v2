import Box from "./TitleBox";
import style from "./header-title.module.css";
import { useRouter } from "next/router";

export default function Title({ title }) {

  const router = useRouter();
  const sailHome = () => router.push("/");

  return (
    <h1 className={style.title} onClick={sailHome}>
      {title.split("").map(char => (
        <Box 
          key={char}
          value={char.toUpperCase()}
        />
      ))}
    </h1>
  );
};
