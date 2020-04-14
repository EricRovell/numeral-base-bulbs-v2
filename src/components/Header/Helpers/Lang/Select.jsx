const Select = ({ styles, label, options, value, name, handleInputChange }) => (
  <label title={label} className={styles}>
    <select
      value={value}
      onChange={handleInputChange}
      name={name}>
        {Object.keys(options).map(option => (
          <option value={option} key={option}>
            {options[option]}
          </option>
        ))}
    </select>
  </label>
);

export default Select;
