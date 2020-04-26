import { useMemo } from "react";

import loadDigits from "./loadDigits";
import Digit from "./Digit";
import EmptyState from "./modes/empty/EmptyState";
import style from "./digits.module.css";

export default function Digits({ mode, skin, dispatch, digits, baseIn, labelsUp, labelsDown, locale }) {

  const Component = useMemo(() => loadDigits(mode, skin), [ mode, skin]);

  if (!digits.length) {
    return <EmptyState dispatch={dispatch} />;
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {digits.map((value, index, arr) => {
          // the 1st element in digits array is the last digit
          // to prevent the props change the digit's index is reversed
          // ! and later to get the index properly to mutate -> reversed again
          const trueIndex = arr.length - index - 1;

          return (
            <Digit
              key={`digit-${trueIndex}`}
              labelsUp={labelsUp}
              labelsDown={labelsDown}
              index={trueIndex}
              dispatch={dispatch}
              baseIn={baseIn}
              locale={locale}>
                <Component
                  value={value}
                  index={trueIndex}
                  baseIn={baseIn}
                  dispatch={dispatch}
                  locale={locale} />
            </Digit>
          );
        })}
      </div>
    </div>
  );
}
