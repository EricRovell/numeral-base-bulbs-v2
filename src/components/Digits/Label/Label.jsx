import { useCallback, useMemo } from "react";
import LabelType from "./LabelType";
import style from "./label.module.css";

export default function Label({ index, type, value, baseIn, locale, dispatch }) {

  const handleClick = useCallback(() => {
    dispatch({
      type: "switchLabel",
      label: type
    });
  }, [ type ]);

  return useMemo(() => (
    <span className={style["label-container"]} onClick={handleClick}>
      <LabelType {...{
        value,
        index,
        baseIn,
        locale
      }} />
    </span>
  ), [ index, baseIn, locale, value ]);
}
