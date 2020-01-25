import { useStateContext } from "components/StateProvider/Context"; 

import Symbolic from "./Symbolic/Symbolic";
import BulbsSimple from "./Bulb/Simple/BulbsSimple";
import BulbsModern from "./Bulb/Modern/BulbsModern";
import EmptyState from "./EmptyState/EmptyState";

import style from "./digits.css"

const RenderDigits = ({ mode, digits, dispatch }) => {
  if (!digits.length) {
    return <EmptyState />;
  }

  switch (mode) {
    case "bulb-simple":
      return <BulbsSimple digits={digits} dispatch={dispatch} />;
    case "bulb-modern":
      return <BulbsModern digits={digits} dispatch={dispatch} />
    case "symbol":
      return <Symbolic digits={digits} />;
    default:
      return <EmptyState />;
  }
};

const Digits = ({ digits }) => {

  const [ { mode }, dispatch ] = useStateContext();

  return (
    <div className={style.digits}>
      <RenderDigits {...{ mode, digits, dispatch }} />
    </div>    
  );
};

export default Digits;
