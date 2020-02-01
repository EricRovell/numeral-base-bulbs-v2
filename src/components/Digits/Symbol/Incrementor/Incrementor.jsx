import { useStateContext } from "components/StateProvider/Context";
import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox";

import IncrementIcon from "./IncrementIcon";
import IncrementSymbolValue from "./handleIncrement";
import { translation } from "./translation";

const Incrementor = ({ action, type = "default", index, value }) => {

  const [ { lang } ] = useStateContext();
  const [ { baseIn }, dispatch ] = useStateSandbox();
  
  const handleIncrement = () => {
    IncrementSymbolValue({
      dispatch,
      action,
      value,
      baseIn,
      index
    });
  };

  return (
    <button onClick={handleIncrement} title={translation[action][lang]}>
      <IncrementIcon type={type} />
    </button>
  );
};

export default Incrementor;
