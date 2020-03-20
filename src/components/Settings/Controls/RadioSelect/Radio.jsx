import RadioSVG from "./RadioSVG";
import style from "./radio-select.module.css";

export default ({ data, nameRadio, valueRadio, handleInputChange  }) => (
  <label className={style.radio}>
    <input
      type="radio"
      name={nameRadio}
      value={data.representation}
      checked={(data.representation === valueRadio)}
      onChange={handleInputChange} />
    <RadioSVG />      
    <span>{data.name}</span>      
  </label>
);
