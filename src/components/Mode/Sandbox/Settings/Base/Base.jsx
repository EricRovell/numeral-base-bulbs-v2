import SettingsSection from "../Section";

import { dataBaseIn, dataBaseOut } from "./data";
import NumberSelect from "components/Settings/Controls/Number";

const BaseForm = ({ baseIn, baseOut }) => {

  return (
    <SettingsSection name={"Base"}>
      <NumberSelect
        data={dataBaseIn}
        value={baseIn}
        id={"settings-sandbox-baseIn"} />
      <NumberSelect
        data={dataBaseOut}
        value={baseOut}
        id={"settings-sandbox-baseOut"} />
    </SettingsSection>
  );
};

export default BaseForm;
