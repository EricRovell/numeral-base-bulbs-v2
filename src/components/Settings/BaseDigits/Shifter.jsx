import { useModalContext } from "components/UI/Modal/context";

import ShifterIcon from "./ShifterIcon";
import validate from "./validate";
import translation from "./translation-ru";

const Shifter = ({ title, increment, digits, digitsMin, digitsMax, dispatch }) => {

  const [ _, dispatchModal ] = useModalContext();

  const addDigits = () => {
    const result = validate({
      increment,
      digitsLength: digits.length,
      digitsMin,
      digitsMax
    });

    switch(result) {
      case 0:
        dispatch({
          type: "addDigit",
          value: increment,
        });
        break;

      case 1:
        dispatchModal({
          type: "show",
          title: "Maximum digits exceeded",
          contents: (
            <div>
              <p>
                {translation.modal.maxDigits.message}
              </p>
            </div>  
          )
        });
        break;

      case -1:
        dispatchModal({
          type: "show",
          title: "Minimum digits exceeded",
          contents: (
            <span>{translation.modal.minDigits.message}</span>
          )
        });
        break;
      
      default:
        return;
    }
  }
  
  return (
    <div
      onClick={addDigits}
      title={title}>
      <ShifterIcon disabled={
        (digits.length >= digitsMax && increment === 1 ||
         digits.length <= digitsMin && increment === -1)
      } />
    </div>
  );
};

export default Shifter;
