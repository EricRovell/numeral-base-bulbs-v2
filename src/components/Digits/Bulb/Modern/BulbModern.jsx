import style from "./bulb-modern.css";

import Label from "../../Digit/Label/Label";

const BulbModern = ({ value, index, dispatch }) => {

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      index,
      value: (value === 1) ? 0 : 1,
    });
  };

  return (
    <div className={style["digit-container"]}>
      <Label index={index} type={"labelsUp"} />
      <div className={style.switch} title={"modern-bulb"}>
        <input
          type="checkbox"
          id={`bulb-modern-${index}`}
          checked={(value === 1)}
          onClick={handleSwitch} />
        <label htmlFor={`bulb-modern-${index}`}>
          <i className={style.bulb}>
            <span className="bulb-center" />
            <span className="reflections">
              <span />
            </span>
            <span className={style.sparks}>
              <i />
              <i />
              <i />
              <i />
            </span>
          </i>
        </label>
      </div>
      <Label index={index} type={"labelsDown"} />
    </div>
  );
};

export default BulbModern;
