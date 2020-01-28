import SymbolDefaultSkin from "./Skins/Default";

/* import style from "./Simple/bulb-simple.css"; */

const symbolSkin = props => ({
  "default": <SymbolDefaultSkin {...props} />
});

const Symbol = ({ skin, value, index }) => {

  return (
    < >
      {symbolSkin({ value, index })[skin]}
    </>
  );
};

export default Symbol;
