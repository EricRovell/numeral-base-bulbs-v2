import { useModalContext } from "components/UI/Modal/context";
import { useStateContext } from "components/StateProvider/Context";

import ShifterIcon from "./ShifterIcon";
import validate from "./validate";
import translation from "./translation-ru";

/* const translationsData = async ({ lang = "en", digitsMin, digitsMax }) => {
  const data = (await import(`./translation-${lang}`)).default;
  return data;
}; */

const Shifter = ({ increment, digits, digitsMin, digitsMax, dispatch }) => {

  const [ { lang } ] = useStateContext();
  const [ _, dispatchModal ] = useModalContext();

  /* const translation = translationsData({
    lang: lang.toLowerCase() || "en",
    digitsMin,
    digitsMax
  }); */

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
      title={(increment == 1)
        ? translation.tip.addDigit
        : translation.tip.removeDigit}>
      <ShifterIcon disabled={
        (digits.length >= digitsMax && increment === 1 ||
         digits.length <= digitsMin && increment === -1)
      } />
    </div>
  );
};

export default Shifter;
