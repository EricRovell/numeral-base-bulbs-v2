import { useStateContext } from "components/StateProvider/Context"; 

import Symbolic from "./Symbolic/Symbolic";
import EmptyState from "./EmptyState/EmptyState";

const Digits = () => {

  const [ { digits }, dispatch ] = useStateContext();

  return (
    (digits.length)
      ? <Symbolic digits={digits} />
      : <EmptyState />
  );
};

export default Digits;
