const Checkbox = ({ data }) => {

  return (
    < >
      <label>
        <span>{data.label}</span>
        <input
          type="checkbox"
          name={data.label} />
      </label>
    </>
  );
};

export default Checkbox;
