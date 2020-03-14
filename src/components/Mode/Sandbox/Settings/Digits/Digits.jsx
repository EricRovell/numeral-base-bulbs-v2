import { defDigits, defMaxDigits, defMinDigits } from "./data";
import TextInput from "components/Settings/Controls/Text";
import NumberSelect from "components/Settings/Controls/Number";

const DigitsForm = ({ digits, digitsMin, digitsMax, handleInputChange }) => {

  return (
    <>
      <NumberSelect
        name={"digitsMin"}
        data={defMinDigits}
        value={digitsMin}
        handleInputChange={handleInputChange} />
      <NumberSelect
        name={"digitsMax"}
        data={defMaxDigits}
        value={digitsMax}
        handleInputChange={handleInputChange} />
      <TextInput
        name={"digits"}
        data={defDigits}
        value={digits}
        handleInputChange={handleInputChange} /> 
    </>
  );
};

export default DigitsForm;
