const TextInput = ({ data }) => {

  return (
    < >
      <label>{data.label}</label>
      <input        
        type="text"
        name={data.label}
        minLength={data.minLength}
        maxLength={data.maxLength} />
    </>
  );
};

export default TextInput;
