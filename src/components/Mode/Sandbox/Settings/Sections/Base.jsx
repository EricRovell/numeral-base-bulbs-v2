import NumberSelect from "components/Settings/Controls/Number";

const BaseForm = ({ locale, baseIn, baseOut, handleInputChange }) => {

  const data = {
    min: 2,
    max: 36,
    datalist: locale.bases
  };

  return (
    <>
      <NumberSelect
        data={{ ...data, label: locale.baseIn }}
        value={baseIn}
        name={"baseIn"}
        id={"settings-sandbox-baseIn"}
        handleInputChange={handleInputChange} />
      <NumberSelect
        data={{ ...data, label: locale.baseOut }}
        value={baseOut}
        name={"baseOut"}
        id={"settings-sandbox-baseOut"}
        handleInputChange={handleInputChange} />
    </>
  );
};

export default BaseForm;
