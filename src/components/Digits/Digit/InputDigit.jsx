const InputDigit = ({ value }) => {

  return (
    <input
      type="text"
      value={value}
      maxLength={1}
      pattern={"[0-9A-Z]"}
    />
  );
};

export default InputDigit;
