import NumberSelect from "components/Settings/Controls/Number";

const BaseForm = ({ langData, baseIn, baseOut, handleInputChange }) => {

  const data = {
    min: 2,
    max: 36,
    datalist: langData.bases
  };

  return (
    <>
      <NumberSelect
        data={{ ...data, label: langData.baseIn }}
        value={baseIn}
        name={"baseIn"}
        id={"settings-sandbox-baseIn"}
        handleInputChange={handleInputChange} />
      <NumberSelect
        data={{ ...data, label: langData.baseOut }}
        value={baseOut}
        name={"baseOut"}
        id={"settings-sandbox-baseOut"}
        handleInputChange={handleInputChange} />
    </>
  );
};

export default BaseForm;
