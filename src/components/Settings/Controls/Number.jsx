const DataList = ({ data, id }) => (
  <datalist id={id}>
    {data.map(option => (
      <option value={option.value} key={option.label}>
        {option.label}
      </option>
    ))}
  </datalist>
);

const NumberSelect = ({ data, value, id }) => {

  return (
    < >
      <label>{data.label}</label>
      <input
        list={id}
        type="number"
        defaultValue={value}
        name={data.label}
        min={data.min}
        max={data.max} />
      {(id) && <DataList data={data.datalist} id={id} />}
    </>
  );
};

export default NumberSelect;
