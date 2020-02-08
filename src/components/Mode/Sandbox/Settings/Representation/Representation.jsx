import SettingsSection from "../Section";

import { data } from "./data";
import CheckboxSelect from "components/Settings/Controls/CheckboxSelect";

const RepresentationForm = () => {

  return (
    <SettingsSection name={"Representation"}>
      {data.map(mode => (
        <CheckboxSelect 
          key={mode.representation}
          data={mode}  
        />
      ))} 
    </SettingsSection>
  );
};

export default RepresentationForm;
