export default {
  currentState: "settings",

  attemps: 1,
  won: 0,
  lost: 0,

  range: [0, 255],

  digits: [0, 0, 0, 0, 0, 0, 0, 0],
  mode: "symbol", // symbol
  skin: "basic",

  digitsMin: 0,
  digitsMax: 16,
  
  baseIn: 2,
  baseOut: 10,
  baseMin: 2,
  baseMax: 16,

  labelsUp: "value",    // index | value | power | none
  labelsDown: "index",
};
