import Box from "./TitleBox";
import style from "./header-title.module.css";

export default function Title({ title }) {

  return (
    <h1 className={style.title}>
      {title.split("").map(char => (
        <Box
          key={char}
          value={char.toUpperCase()}
        />
      ))}
    </h1>
  );
};
