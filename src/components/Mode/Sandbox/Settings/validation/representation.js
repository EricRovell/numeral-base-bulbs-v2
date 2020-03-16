export default (state) => {
  const { mode, skin } = state;

  const valid = {
    "bulb": [ "default", "modern", "lamp" ],
    "symbol": [ "default", "basic" ]
  };

  return (mode in valid && valid[mode].includes(skin))
    ? state
    : { ...state, mode: "symbol", skin: "default" }; 
};