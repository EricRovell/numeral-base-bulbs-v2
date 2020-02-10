const Select = ({ data, value, name, handleInputChange }) => (
  < >
    <label>{data.label}</label>        
      <select
        defaultValue={value}
        value={value}
        onChange={handleInputChange}
        name={name}>
          {data.options.map((option, i) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>      
  </>
);

export default Select;
