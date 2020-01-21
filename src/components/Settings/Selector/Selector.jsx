import style from "./selector.css";

const Selector = ({ title, property, options, stateValue, dispatch, lang }) => {

  const setProperty = event => {
    const value = event.currentTarget.getAttribute("data-value");
    if (value) {
      dispatch({
        type: "setStateProperty",
        property,
        value,
      });
    }
  }

  const Options = ({ title, options, stateValue, setProperty }) => (
    options.map(option => (
      <>
        <input
          type="radio"
          name={title["EN"]}
          id={`radio-${option.label["EN"]}`}
          data-value={option.value}
          onClick={setProperty}
          defaultChecked={( stateValue === option.value )} />
        <label htmlFor={`radio-${option.label["EN"]}`}>
          {option.label[lang]}
        </label>
      </>    
    ))
  );

  return (
    <form className={style.selector}>
      <h5>{title[lang]}</h5>
      <div>
        <Options {...{ title, options, stateValue, setProperty }} />   
      </div>         
    </form>
  );
};

export default Selector;
