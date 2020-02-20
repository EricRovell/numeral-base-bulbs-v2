import { useState } from "react";
import style from "./button-with-message.module.css";

const Button = ({ title, action, handleClick }) => {

  const [ isActive, setIsActive ] = useState(false);

  const setAction = event => {
    event.preventDefault();
    setIsActive(true);
    handleClick();

    setTimeout(() => {
      setIsActive(false);
    }, 1250);
  }
  
  return (
    <button
      onClick={setAction}
      className={`
        ${style["button-with-icon"]}
        ${isActive && style["button-with-icon--active"]}`}>
          <div>
            <span>{title}</span>
            <span>
              {action}
            </span>
          </div>
    </button>
  );
};

export default Button;
