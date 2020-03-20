const DataList = ({ data, id }) => (
  <datalist id={id}>
    {Object.keys(data).map(option => (
      <option value={option} key={data[option]}>
        {data[option]}
      </option>
    ))}
  </datalist>
);

const NumberSelect = ({ data, value, id, name, handleInputChange, regexp }) => (
  < >
    <label>{data.label}</label>
    <input
      list={id}
      type="number"
      name={name}
      value={value}
      onChange={handleInputChange}
      min={data.min}
      max={data.max}
      pattern={regexp} />
    {(id) && <DataList data={data.datalist} id={id} />}
  </>
);

export default NumberSelect;
