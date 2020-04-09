import RadioSelect from "components/Settings/Controls/RadioSelect/RadioSelect";

const RepresentationForm = ({ locale, skin, mode, handleInputChange }) => (
  <>
    {locale.map(modeRepr => (
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
