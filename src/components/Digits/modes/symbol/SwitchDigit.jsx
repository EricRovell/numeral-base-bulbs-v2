export default function SwitchDigit({ index, value, title, dispatch }) {

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      action: 1,
      index,
      value
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
