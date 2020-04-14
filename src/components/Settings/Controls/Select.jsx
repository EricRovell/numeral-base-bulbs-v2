const Select = ({ label, options, value, name, handleInputChange }) => (
  < >
    <label>{label}</label>
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
  </>
);

export default Select;
