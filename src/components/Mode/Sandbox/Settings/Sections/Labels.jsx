import Select from "components/Settings/Controls/Select";

const LabelsForm = ({ locale, valueUp, valueDown, handleInputChange }) => (
  <>  
    <Select
      name={"labelsUp"}
      label={locale.labelsUp}
      options={locale.options}
      value={valueUp}
      handleInputChange={handleInputChange} />
    <Select
      name={"labelsDown"}
      label={locale.labelsDown}
      options={locale.options}
      value={valueDown}
      handleInputChange={handleInputChange} />
  </>
);

export default LabelsForm;
