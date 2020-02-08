const RadioWithOptions = ({ data, name }) => {

  return (
    < >
      <input type="radio" name={name} />
      <label>
        {data.representation}
      </label>
      <select>
        {data.skins.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>   
    </>
  );
};

export default RadioWithOptions;
