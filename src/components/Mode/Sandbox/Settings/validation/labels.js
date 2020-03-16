export default (state) => {
  const { labelsUp, labelsDown } = state;

  const valid = [
    "index",
    "value",
    "power",
    "none"
  ];

  return {
    ...state,
    labelsUp:
      (valid.includes(labelsUp))
        ? labelsUp
        : "value",
    labelsDown:
      (valid.includes(labelsDown))
        ? labelsDown
        : "index",
  };
};
