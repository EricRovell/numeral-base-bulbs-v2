import SettingsSection from "components/Settings/Section";

import { data } from "./data";
import RadioWithOptions from "components/Settings/Controls/RadioWithOptions";

const RepresentationForm = ({ skin, mode, handleInputChange }) => {

  return (
    <SettingsSection name={"Representation"}>
      {data.map(modeRepr => (
        <RadioWithOptions 
          key={modeRepr.representation}
          data={modeRepr}
          nameRadio={"mode"}
          nameSelect={"skin"}
          valueRadio={mode}
          valueSelect={skin}
          handleInputChange={handleInputChange}  
        />
      ))} 
    </SettingsSection>
  );
};

export default RepresentationForm;
