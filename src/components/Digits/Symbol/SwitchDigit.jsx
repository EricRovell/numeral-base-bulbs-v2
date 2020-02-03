import { useStateSandbox } from "components/Mode/Sandbox/State/useStateSandbox"; 

const SwitchDigit = ({ index, value }) => {

  const [ {}, dispatch ] = useStateSandbox();

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      index,
      value: (value === 0) ? 1 : 0,
    });
  };

  return (
    <div onClick={handleSwitch}>
      {value}
    </div>
  );
};

export default SwitchDigit;
