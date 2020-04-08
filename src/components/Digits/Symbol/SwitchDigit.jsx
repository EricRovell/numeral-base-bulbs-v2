export default function SwitchDigit({ index, value, title, dispatch }) {

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      index,
      value: (value === 0) ? 1 : 0,
    });
  };

  return (
    <div
      onClick={handleSwitch}
      title={title}>
        {value}
    </div>
  );
};
