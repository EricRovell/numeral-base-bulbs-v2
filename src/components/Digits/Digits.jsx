import Digit from "./Digit";
import EmptyState from "./modes/empty/EmptyState";
import WrongInput from "./modes/wrong-input/WrongInput";
import style from "./digits.module.css";

export default function Digits({ mode, skin, dispatch, digits, baseIn, labelsUp, labelsDown, locale }) {

  if (!baseIn) {
    return <WrongInput message={locale.wrongInput} />
  }

  if (!digits.length) {
    return <EmptyState dispatch={dispatch} />;
  }

  // the 1st element in digits array is the last digit
  // to prevent the props change the digit's index is reversed
  // ! and later to get the index properly to mutate -> reversed again
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {digits.map((value, index, arr) => (
          <Digit
            key={`digit-${arr.length - index - 1}`}
            mode={mode}
            skin={skin}
            labelsUp={labelsUp}
            labelsDown={labelsDown}
            index={arr.length - index - 1}
            dispatch={dispatch}
            baseIn={baseIn}
            locale={locale}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}
