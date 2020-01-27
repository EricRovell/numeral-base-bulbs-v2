import style from "./bulb-logo.css";

const BulbLogo = () => {

  return (
    <div className={style.lampadario}>
      <input type="checkbox" name="switch" id="logo-switch" />
      <label htmlFor="logo-switch" />
      <div className={style.wire}></div>
  </div>
  );
};

export default BulbLogo;
