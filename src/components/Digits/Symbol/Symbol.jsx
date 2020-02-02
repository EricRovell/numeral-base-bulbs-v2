import SymbolDefaultSkin from "./Skins/Default";
import SymbolBasicSkin from "./Skins/Basic";

const symbolSkin = props => ({
  "default": <SymbolDefaultSkin {...props} />,
  "basic": <SymbolBasicSkin {...props} />
});

const Symbol = ({ skin, value, index }) => {

  return (
    < >
      {symbolSkin({ value, index })[skin]}
    </>
  );
};

export default Symbol;
