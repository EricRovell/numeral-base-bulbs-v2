import { labelsUp, labelsDown } from "./data";
import Select from "components/Settings/Controls/Select";

const LabelsForm = ({ valueUp, valueDown, handleInputChange }) => (
  <>  
    <Select
      name={"labelsUp"}
      data={labelsUp}
      value={valueUp}
      handleInputChange={handleInputChange} />
    <Select
      name={"labelsDown"}
      data={labelsDown}
      value={valueDown}
      handleInputChange={handleInputChange} />
  </>
);

export default LabelsForm;
