import style from "./lamp.module.css";

export default ({ value, index, handleSwitch }) => (
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
