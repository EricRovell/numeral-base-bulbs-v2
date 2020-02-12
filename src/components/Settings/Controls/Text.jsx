const TextInput = ({ data, value, name, handleInputChange }) => (
  < >
    <label>{data.label}</label>
    <input        
      type="text"
      name={name}
      value={value}
      minLength={data.minLength}
      maxLength={data.maxLength}
      onChange={handleInputChange} />
  </>
);

export default TextInput;
