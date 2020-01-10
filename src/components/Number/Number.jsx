import style from "./number.css";

const Number = () => {

  return (
    <div className={style.number}>
      <div></div>
      <button></button>
      <button></button>
      <input type="text" value={123456}/>
    </div>
  );
};

export default Number;
