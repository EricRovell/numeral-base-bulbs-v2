import ButtonWithMessage from "components/Settings/Controls/ButtonWithMessage/ButtonWithMessage";

const LabelsForm = ({ saveUserSettings, resetSettings }) => {

  return (
    <div>
      <ButtonWithMessage
        title={"Reset to defaults"}
        action={"Done!"}
        handleClick={resetSettings} />
      <ButtonWithMessage
        title={"Save user settings"}
        action={"Saved successfully!"}
        handleClick={saveUserSettings} />    
    </div>
  );
};

export default LabelsForm;
