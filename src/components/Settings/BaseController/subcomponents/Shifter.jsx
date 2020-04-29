import { useCallback } from "react";
import { useModalContext } from "components/Hooks/useModal/useModalContext";
//import WarningModal from "components/Hooks/useModal/Modals/WarningModal";

import ShifterIcon from "./ShifterIcon";

export default function Shifter({ title, action, dispatch }) {

  //const [ _, dispatchModal ] = useModalContext();

  const addDigits = useCallback(() => {
    dispatch({
      type: "addDigit",
      action
    });
  });
  
  return (
    <div
      onClick={addDigits}
      title={title}>
      <ShifterIcon />
    </div>
  );
};

/*
disabled={
        (digits.length >= digitsMax && action === 1 ||
         digits.length <= digitsMin && action === -1)
      }
*/