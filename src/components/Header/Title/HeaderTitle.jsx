import Box from "./TitleBox";
import style from "./header-title.module.css";
/* import { useRouter } from "next/router"; */
import sailHome from "../sailHome";

export default function Title({ title }) {

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
