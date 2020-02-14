const Select = ({ data, value, handleInputChange }) => (
  < >
    {data.options.map(option => (
      <label key={option.title}>
        <input
          type="radio"
          name={data.name}
          value={option.value}
          checked={(value === option.value)}
          onChange={handleInputChange} />
        <span>{option.title}</span>
      </label>  
    ))}  
  </>
);

export default Select;
