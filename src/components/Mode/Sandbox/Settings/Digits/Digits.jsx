import SettingsSection from "../Section";

import { defDigits, defMaxDigits, defMinDigits } from "./data";
import TextInput from "components/Settings/Controls/Text";
import NumberSelect from "components/Settings/Controls/Number";

const DigitsForm = ({ digits, digitsMin, digitsMax, handleInputChange }) => {

  return (
    <SettingsSection name={"Digits"}>
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
    </SettingsSection>
  );
};

export default DigitsForm;
