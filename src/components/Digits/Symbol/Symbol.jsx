import SymbolDefaultSkin from "./Skins/Default";
import SymbolBasicSkin from "./Skins/Basic";

const symbolSkin = props => ({
  "default": <SymbolDefaultSkin {...props} />,
  "basic": <SymbolBasicSkin {...props} />
});

const Symbol = (props) => (
  < >
    {symbolSkin({ ...props })[props.skin]}
  </>
);

export default Symbol;
