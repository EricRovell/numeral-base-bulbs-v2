import Select from "components/Settings/Controls/Select";

const LabelsForm = ({ langData, valueUp, valueDown, handleInputChange }) => (
  <>  
    <Select
      name={"labelsUp"}
      label={langData.labelsUp}
      options={langData.options}
      value={valueUp}
      handleInputChange={handleInputChange} />
    <Select
      name={"labelsDown"}
      label={langData.labelsDown}
      options={langData.options}
      value={valueDown}
      handleInputChange={handleInputChange} />
  </>
);

export default LabelsForm;
