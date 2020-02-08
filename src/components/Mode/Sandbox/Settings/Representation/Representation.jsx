import SettingsSection from "../Section";

import { data } from "./data";
import RadioWithOptions from "components/Settings/Controls/RadioWithOptions";

const RepresentationForm = () => {

  return (
    <SettingsSection name={"Representation"}>
      {data.map(mode => (
        <RadioWithOptions 
          key={mode.representation}
          data={mode}
          name={"representation-sandbox"}  
        />
      ))} 
    </SettingsSection>
  );
};

export default RepresentationForm;
