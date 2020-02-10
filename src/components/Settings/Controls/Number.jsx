const DataList = ({ data, id }) => (
  <datalist id={id}>
    {data.map(option => (
      <option value={option.value} key={option.label}>
        {option.label}
      </option>
    ))}
  </datalist>
);

const NumberSelect = ({ data, value, id, name, handleInputChange }) => (
  < >
    <label>{data.label}</label>
    <input
      list={id}
      type="number"
      name={name}
      defaultValue={value}
      value={value}
      onChange={handleInputChange}
      min={data.min}
      max={data.max} />
    {(id) && <DataList data={data.datalist} id={id} />}
  </>
);

export default NumberSelect;
