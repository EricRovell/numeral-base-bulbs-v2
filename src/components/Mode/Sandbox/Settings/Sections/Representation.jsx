import RadioSelect from "components/Settings/Controls/RadioSelect/RadioSelect";

const RepresentationForm = ({ langData, skin, mode, handleInputChange }) => (
  <>
    {langData.map(modeRepr => (
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
