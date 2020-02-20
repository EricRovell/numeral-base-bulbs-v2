import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox"; 

import Bulbs from "./Bulb/Bulbs";
import Symbols from "./Symbol/Symbols";
import EmptyState from "./EmptyState/EmptyState";

import style from "./digits.module.css"

const renderDigits = (props) => ({
  "bulb": <Bulbs {...props} />,
  "symbol": <Symbols {...props} />,
});

const Digits = ({ digits }) => {

  const [ { mode, skin, baseIn }, dispatch ] = useStateSandbox();

  if (!digits.length) {
    return <EmptyState dispatch={dispatch} />;
  }

  return (
    <div className={style.wrapper}>
      {renderDigits({ digits, skin, baseIn, dispatch })[mode]}
    </div>    
  );
};

export default Digits;
