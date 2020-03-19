import { data } from "./data";
import RadioSelect from "components/Settings/Controls/RadioSelect/RadioSelect";

const RepresentationForm = ({ skin, mode, handleInputChange }) => (
  <>
    {data.map(modeRepr => (
      <RadioSelect 
        key={modeRepr.representation}
        data={modeRepr}
        nameRadio={"mode"}
        nameSelect={"skin"}
        valueRadio={mode}
        valueSelect={skin}
        handleInputChange={handleInputChange}  
      />
    ))} 
  </>
);

export default RepresentationForm;
