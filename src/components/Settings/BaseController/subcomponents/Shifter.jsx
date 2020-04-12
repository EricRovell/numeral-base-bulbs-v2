import { useModalContext } from "components/Hooks/useModal/useModalContext";
import WarningModal from "components/Hooks/useModal/Modals/WarningModal";

import ShifterIcon from "./ShifterIcon";
import validate from "./validate";

export default function Shifter({ title, increment, digits, digitsMin, digitsMax, dispatch }) {

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
          contents: (
            <WarningModal
              title="Limit exceeded"
              message="No more digits are allowed."  
            />
          )
        });
        break;

      case -1:
        dispatchModal({
          type: "show",
          contents: (
            <WarningModal
              title="Limit exceeded"
              message="No more digits to remove."  
            />
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
