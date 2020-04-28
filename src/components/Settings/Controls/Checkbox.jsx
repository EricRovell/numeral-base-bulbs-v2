export default function Checkbox ({ label, name, value, handleInputChange, style }) {
  return (
    <label className={style}>
      <input
        type="checkbox"
        style={{ display: "none" }}
        name={name}
        value={value}
        checked={value}
        onChange={handleInputChange} />
      <svg viewBox="0 0 455 453">
        <title>{1}</title>
        <polyline points="53 223 172 343 402 109"  />
        <rect x="1" y="1" width="454" height="451.74" rx="75" />
      </svg>
      <span>{label}</span>
    </label>
  );
}
