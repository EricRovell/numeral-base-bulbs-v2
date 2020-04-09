import TextInput from "components/Settings/Controls/Text";
import NumberSelect from "components/Settings/Controls/Number";

const DigitsForm = ({ locale, digits, digitsMin, digitsMax, handleInputChange }) => (
  <>
    <NumberSelect
      name={"digitsMin"}
      data={{ label: locale.min, min: 0, max: 36 }}
      value={digitsMin}
      handleInputChange={handleInputChange} />
    <NumberSelect
      name={"digitsMax"}
      data={{ label: locale.max, min: 0, max: 36 }}
      value={digitsMax}
      handleInputChange={handleInputChange} />
    <TextInput
      name={"digits"}
      data={{ label: locale.digits, minLength: 0, maxLength: 32 }}
      value={digits}
      handleInputChange={handleInputChange} /> 
  </>
);

export default DigitsForm;
