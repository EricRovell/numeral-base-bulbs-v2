import CheckboxSelect from "components/Settings/Controls/CheckboxSelect/CheckboxSelect";

export default function LabelsForm({ labelsUp, labelsDown, handleInputChange, locale }) {
  return (
    <>
      <CheckboxSelect
        label={locale.data.labelsUp.label}
        options={locale.data.labelsUp.options}
        nameCheckbox="labelsUpShow"
        nameSelect="labelsUpMode"
        valueCheckbox={labelsUp.show}
        valueSelect={labelsUp.mode}
        handleInputChange={handleInputChange} />
      <CheckboxSelect
        label={locale.data.labelsDown.label}
        options={locale.data.labelsDown.options}
        nameCheckbox="labelsDownShow"
        nameSelect="labelsDownMode"
        valueCheckbox={labelsDown.show}
        valueSelect={labelsDown.mode}
        handleInputChange={handleInputChange} />
    </>
  );
}
