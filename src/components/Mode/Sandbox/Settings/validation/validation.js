import validateRepr from "./representation";
import validateRadix from "./radix";
import validateMinMaxDigits from "./minmaxDigits";
import validateDigits from "./digits";

export default (state) => {
  // validation order matters
    //  -> mode/skin
    //  -> radix (bases)
    //  -> minmax digits
    //  -> digits
    //  -> labels

  return validateDigits(
      validateMinMaxDigits(
        validateRadix(
          validateRepr(state)
      )
    )
  );
};
