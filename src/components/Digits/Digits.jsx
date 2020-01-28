import { useStateContext } from "components/StateProvider/Context"; 

import Bulbs from "./Bulb/Bulbs";
import Symbols from "./Symbol/Symbols";
import EmptyState from "./EmptyState/EmptyState";

import style from "./digits.css"

const RenderDigits = ({ mode, skin, digits, dispatch }) => {
  if (!digits.length) return <EmptyState />;

  switch (mode) {
    case "bulb":
      return <Bulbs digits={digits} dispatch={dispatch} skin={skin} />
    case "symbol":
      return <Symbols digits={digits} skin={skin} />;
    default:
      return <EmptyState />;
  }
};

const Digits = ({ digits }) => {

  const [ { mode, skin }, dispatch ] = useStateContext();

  return (
    <div className={style.wrapper}>
      <RenderDigits {...{ mode, digits, dispatch, skin }} />
    </div>    
  );
};

export default Digits;
