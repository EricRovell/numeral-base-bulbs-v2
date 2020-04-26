import SwitchDigit from "../SwitchDigit";
import InputDigit from "../InputDigit";

import style from "./basic.module.css";

export default function SymbolBasic({ index, value, dispatch, baseIn, locale }) {

  return (
    <div className={style.basic}>
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
            dispatch={dispatch} />
      }      
    </div>
  )
}
