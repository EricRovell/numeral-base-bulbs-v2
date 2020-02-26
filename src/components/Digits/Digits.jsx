import Bulbs from "./Bulb/Bulbs";
import Symbols from "./Symbol/Symbols";
import EmptyState from "./EmptyState/EmptyState";

import style from "./digits.module.css"

const renderDigits = (props) => ({
  "bulb": <Bulbs {...props} />,
  "symbol": <Symbols {...props} />,
});

const Digits = (props) => {

  if (!props.digits.length) {
    return <EmptyState dispatch={props.dispatch} />;
  }

  return (
    <div className={style.wrapper}>
      {renderDigits({ ...props })[props.mode]}
    </div>    
  );
};

export default Digits;
