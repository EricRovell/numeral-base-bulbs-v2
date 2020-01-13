import { useStateContext } from "components/StateProvider/Context"; 

import Symbolic from "./Symbolic/Symbolic";
import EmptyState from "./EmptyState/EmptyState";

import style from "./digits.css"

const Digits = () => {

  const [ { digits }, dispatch ] = useStateContext();

  return (
    <div className={style.digits}>
      {(digits.length)
        ? <Symbolic digits={digits} />
        : <EmptyState />}
    </div>    
  );
};

export default Digits;
