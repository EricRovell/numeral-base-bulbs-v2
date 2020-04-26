import style from "./modern.module.css";

export default function BinaryModern({ value, index, dispatch }) {

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      action: 1,
      index,
      value
    });
  };
  
  return (
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
  )
}
