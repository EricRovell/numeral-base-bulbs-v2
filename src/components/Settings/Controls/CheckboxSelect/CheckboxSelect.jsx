import Checkbox from "../Checkbox";
import style from "./checkbox-select.module.css";

export default function CheckboxSelect({ label, options, nameCheckbox, nameSelect, valueCheckbox, valueSelect, handleInputChange }) {

  return (
    < >
      <Checkbox
        label={label}
        name={nameCheckbox}
        value={valueCheckbox}
        handleInputChange={handleInputChange}
        style={style.checkbox} />
      <select
        name={nameSelect}
        onChange={handleInputChange}
        value={valueSelect}
        disabled={!valueCheckbox}>
          {Object.keys(options).map(option => (
            <option value={option} key={option}>
              {options[option]}
            </option>
          ))}
      </select>
    </>
  );
}
