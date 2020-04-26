import { useMemo } from "react";
import Label from "./Label/Label";
import style from "./digits.module.css";

export default function Digit({ labelsUp, labelsDown, index, dispatch, baseIn, locale, children }) {

  return (
    <div className={style.digit}>
      {
        (labelsUp.render)
          ? useMemo(() => <Label {...{
              type: "labelsUp",
              value: labelsUp.mode,
              baseIn,
              index,
              dispatch,
              locale: locale.label
            }} />, [ index, labelsUp.mode, baseIn, locale ])
          : <span />
      }

      {children}

      {
        (labelsDown.render)
          ? useMemo(() => <Label {...{
              type: "labelsDown",
              value: labelsDown.mode,
              baseIn,
              index,
              dispatch,
              locale: locale.label
            }} />, [ index, labelsDown.mode, baseIn, locale ])
          : <span />
      }
    </div>
  );
}
