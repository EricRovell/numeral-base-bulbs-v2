import { dataBaseIn, dataBaseOut } from "./data";
import NumberSelect from "components/Settings/Controls/Number";

const BaseForm = ({ baseIn, baseOut, handleInputChange }) => {

  return (
    <>
      <NumberSelect
        data={dataBaseIn}
        value={baseIn}
        name={"baseIn"}
        id={"settings-sandbox-baseIn"}
        handleInputChange={handleInputChange} />
      <NumberSelect
        data={dataBaseOut}
        value={baseOut}
        name={"baseOut"}
        id={"settings-sandbox-baseOut"}
        handleInputChange={handleInputChange} />
    </>
  );
};

export default BaseForm;
