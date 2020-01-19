
import style from "./selector.css";

const Selector = ({ title, state, options }) => {

  const Options = () => (
    options.map(option => (
      <label>
        <input type="radio" name={title["EN"]} />
        <span>{option.label["EN"]}</span>
      </label>    
    ))
  );

  return (
    <form className={style.selector}>
      <span>{title["EN"]}</span>
      <div>
        <Options />
      </div>
    </form>
  );
};

export default Selector;
