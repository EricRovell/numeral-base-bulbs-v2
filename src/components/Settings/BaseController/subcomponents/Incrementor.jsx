export default function Incrementor({ action, base, value, dispatch, title }) {

  const increment = () => {
    dispatch({
      type: "setBase",
      base,
      action,
      value: +value
    });

    // decrement digits' values if incompatible base selected
    // example: user had digit "3" and changed to binary
    //   -> shift to the max possible binary value
    dispatch({ type: "normalizeDigits" });
  };

  return (
    <button onClick={increment} title={title}>
      <svg viewBox="0 0 320 191.9">
        <path d="M2.9,24.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6s14.6-3.4,19.2-8.6L315,27.1l2.3-2.6C319,22,320,19,320,15.8
          C320,7.1,312.6,0,303.4,0l0,0H16.6l0,0C7.4,0,0,7.1,0,15.8C0,19.1,1.1,22.2,2.9,24.7z"/>
      </svg>
    </button>
  );
};
