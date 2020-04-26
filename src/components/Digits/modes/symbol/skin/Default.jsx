import Incrementor from "../Incrementor";
import SwitchDigit from "../SwitchDigit";
import InputDigit from "../InputDigit";

import style from "./default.module.css";

export default function SymbolDefault({ value, index, baseIn, dispatch, locale }) {

  return (
    <div className={style.digit}>
      <div/>
      <div />
      <div />
      <Incrementor {...{
        action: 1,
        index,
        value,
        dispatch,
        title: locale.increment
      }} />
      <Incrementor {...{
        action: -1,
        index,
        value,
        dispatch,
        title: locale.decrement
      }} />
      {(baseIn === 2)
        ? <SwitchDigit
            title={locale.switch}
            index={index}
            value={value}
            dispatch={dispatch} />
        : <InputDigit
            title={locale.input}
            baseIn={baseIn}
            value={value}
            index={index}
            dispatch={dispatch} />}
    </div>
  );
}
