import { useMemo } from "react";
import Label from "./Label/Label";
import style from "./digits.module.css";
import loadDigits from "./loadDigits";

export default function Digit({ mode, skin, value, labelsUp, labelsDown, index, dispatch, baseIn, locale }) {

  const Component = useMemo(() => loadDigits(mode, skin), [ mode, skin]);

  return (
    <div className={style.digit}>
      {
        useMemo(() => (
          (labelsUp.show)
            ? <Label {...{
                type: "labelsUpMode",
                value: labelsUp.mode,
                baseIn,
                index,
                dispatch,
                locale: locale.label
              }} />
            : <span />
        ), [ index, labelsUp, baseIn, locale ])
      }

      {useMemo(() => (
        <Component
          value={value}
          index={index}
          baseIn={baseIn}
          dispatch={dispatch}
          locale={locale}
        />), [ value, index, baseIn, locale, mode, skin ])}

      {
        useMemo(() => (
          (labelsDown.show)
            ? <Label {...{
                type: "labelsDownMode",
                value: labelsDown.mode,
                baseIn,
                index,
                dispatch,
                locale: locale.label
              }} />
            : <span />
        ), [ index, labelsDown, baseIn, locale ])
      }
    </div>
  );
}
