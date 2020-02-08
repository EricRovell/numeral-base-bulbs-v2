import SettingsSection from "../Section";

import { digits, minDigits, maxDigits } from "./data";
import TextInput from "components/Settings/Controls/Text";
import NumberSelect from "components/Settings/Controls/Number";

const DigitsForm = () => {

  return (
    <SettingsSection name={"Digits"}>
      <NumberSelect data={minDigits} />
      <NumberSelect data={maxDigits} />
      <TextInput data={digits} /> 
    </SettingsSection>
  );
};

export default DigitsForm;
