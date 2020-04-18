import useValidInput from "./useValidInput";
import style from "components/Number/number-input.module.css";

export default function InputDigit({ index, value, baseIn, title, dispatch }) {

  const [ wrongInput, validate ] = useValidInput({ baseIn });

  const handleChange = event => {
    const userInput = event.target.value;
    if (!validate(userInput)) {
      return;
    }

    dispatch({
      type: "mutateDigit",
      index,
      value: userInput.toUpperCase().charCodeAt() - 55,
    });
  };

  const digit2char = () => (
    (value > 9 && value <= 36)
      ? String.fromCharCode(value + 55)
      : value
  );

  const onFocusSelectAll = event => {
    event.target.select();
  };

  return (
    <input
      type="text"
      title={title}
      className={(wrongInput) ? style["number-input"] : null}
      onChange={handleChange}
      onFocus={onFocusSelectAll}
      value={digit2char()}
      maxLength={1}
      inputMode={(baseIn >= 2 && baseIn <= 10) ? "numeric" : "text"}
    />
  );
};
