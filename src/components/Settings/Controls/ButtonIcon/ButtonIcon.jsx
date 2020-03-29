//import { useState } from "react";
import style from "./button-icon.module.css";

const Button = ({ title, handleClick, children }) => {

  //const [ isActive, setIsActive ] = useState(false);

  const setAction = event => {
    event.preventDefault();
    //setIsActive(true);
    handleClick();

    /* setTimeout(() => {
      setIsActive(false);
    }, 1250); */
  }
  
  return (
    <button
      title={title}
      onClick={setAction}
      className={style["button-with-icon"]}>
        <div>
          {children}
        </div>
    </button>
  );
};

export default Button;
