import validateRepr from "./representation";
import validateRadix from "./radix";
import validateMinMaxDigits from "./minmaxDigits";
import validateDigits from "./digits";
import validateLabels from "./labels";

export default (state) => {
  // validation order matters
    //  -> mode/skin
    //  -> radix (bases)
    //  -> minmax digits
    //  -> digits
    //  -> labels

  return validateLabels(
    validateDigits(
        validateMinMaxDigits(
          validateRadix(
            validateRepr(state)
        )
      )
    )
  );
};
