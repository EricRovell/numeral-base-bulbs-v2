import SymbolDefaultSkin from "./Skins/Default";
import SymbolBasicSkin from "./Skins/Basic";

const symbolSkin = props => ({
  "default": <SymbolDefaultSkin {...props} />,
  "basic": <SymbolBasicSkin {...props} />
});

const Symbol = ({ skin, baseIn, value, index, dispatch }) => (
  < >
    {symbolSkin({ value, index, baseIn, dispatch })[skin]}
  </>
);

export default Symbol;
