export default ({ dispatch, action, value, baseIn, index }) => {

  const nextValue = (action === 1 && value === baseIn - 1)
    ? 0
    : (action === -1 && value === 0)
    ? baseIn - 1
    : value + action

  dispatch({
    type: "mutateDigit",
    index,
    value: nextValue
  });
};
