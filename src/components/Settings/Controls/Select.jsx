const Select = ({ data, value }) => {

  return (
    < >
      <label>{data.label}</label>        
        <select defaultValue={value}>
          {data.options.map((option, i) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>      
    </>
  );
};

export default Select;
