const Select = ({ data, value, handleInputChange }) => (
  < >
    {Object.keys(data.options).map(option => (
      <label key={option}>
        <input
          type="radio"
          name={data.name}
          value={option}
          checked={(value === option)}
          onChange={handleInputChange} />
        <span>{data.options[option]}</span>
      </label>  
    ))}  
  </>
);

export default Select;
