import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox"; 

import Bulbs from "./Bulb/Bulbs";
import Symbols from "./Symbol/Symbols";
import EmptyState from "./EmptyState/EmptyState";

import style from "./digits.css"

const RenderDigits = ({ mode, skin, digits, dispatch, baseIn }) => {
  if (!digits.length) return <EmptyState />;

  switch (mode) {
    case "bulb":
      return <Bulbs {...{ digits, skin, dispatch }} />
    case "symbol":
      return <Symbols {...{ digits, skin, baseIn, dispatch }} />;
    default:
      return <EmptyState />;
  }
};

const Digits = ({ digits }) => {

  const [ { mode, skin, baseIn }, dispatch ] = useStateSandbox();

  return (
    <div className={style.wrapper}>
      <RenderDigits {...{ mode, digits, baseIn, dispatch, skin }} />
    </div>    
  );
};

export default Digits;
