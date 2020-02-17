import Radio from "components/Settings/Controls/Radio";

const Tabs = ({ data, value, setTab, style }) => {

  const handleInputChange = ({ target }) => {
    setTab(target.value);
  };

  return (
    <div className={style}>
      <Radio
        data={data}
        handleInputChange={handleInputChange}
        value={value} />
    </div>
  );
};

export default Tabs;
