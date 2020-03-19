import Radio from "./Radio";

const RadioWithOptions = ({ data, nameRadio, nameSelect, valueRadio, valueSelect, handleInputChange }) => (
  < >
    <Radio {...{
      data, nameRadio, valueRadio, handleInputChange
    }} />
    <select
      name={nameSelect}
      onChange={handleInputChange}
      value={valueSelect}
      disabled={(data.representation !== valueRadio)}>
        {data.skins.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
    </select>   
  </>
);

export default RadioWithOptions;
