const SwitchDigit = ({ index, value, dispatch }) => {

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
