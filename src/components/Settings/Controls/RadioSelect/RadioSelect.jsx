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
        {Object.keys(data.skins).map(skin => (
          <option value={skin} key={skin}>
            {data.skins[skin]}
          </option>
        ))}
    </select>   
  </>
);

export default RadioWithOptions;
