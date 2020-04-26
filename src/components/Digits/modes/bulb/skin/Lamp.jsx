import style from "./lamp.module.css";

export default function BinaryLamp({ value, index, dispatch }) {

  const handleSwitch = () => {
    dispatch({
      type: "mutateDigit",
      action: 1,
      index,
      value
    });
  };

  return (
    <div className={style.lamp}>
      <input
        type="checkbox" 
        name="switch"
        checked={(value === 1)}
        onClick={handleSwitch}
        id={`lamp-${index}`} />
      <div className={style.wire}>
        <label htmlFor={`lamp-${index}`} />
      </div>
    </div>
  );
}
