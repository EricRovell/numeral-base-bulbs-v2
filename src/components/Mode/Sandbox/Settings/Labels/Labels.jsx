import SettingsSection from "../Section";

import { labelsUp, labelsDown } from "./data";
import Select from "components/Settings/Controls/Select";

const LabelsForm = ({ valueUp, valueDown, dispatch }) => {

  return (
    <SettingsSection name={"Labels"}>
      <Select
        data={labelsUp}
        value={valueUp} />
      <Select
        data={labelsDown}
        value={valueDown} />
    </SettingsSection>
  );
};

export default LabelsForm;
