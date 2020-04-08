import IncrementIcon from "./IncrementIcon";
import IncrementSymbolValue from "./handleIncrement";

export default function Incrementor({ action, type = "default", title, index, value, baseIn, dispatch }) {
  
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
    <button onClick={handleIncrement} title={title}>
      <IncrementIcon type={type} />
    </button>
  );
};
