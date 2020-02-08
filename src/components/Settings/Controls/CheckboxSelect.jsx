import Checkbox from "./Checkbox";
import Select from "./Select";

const CheckBoxSelect = ({ data }) => {

  return (
    < >
      <input type="checkbox" />
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

export default CheckBoxSelect;
