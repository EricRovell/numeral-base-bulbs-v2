const InputDigit = ({ value, representation }) => {

  const digit2char = () => {
    if (representation !== "symbol") {
      return value;
    }

    return (value > 9 && value <= 36)
      ? String.fromCharCode(value + 55)
      : value
  };

  return (
    <input
      type="text"
      value={digit2char()}
      maxLength={1}
      pattern={"[0-9A-Z]"}
    />
  );
};

export default InputDigit;
