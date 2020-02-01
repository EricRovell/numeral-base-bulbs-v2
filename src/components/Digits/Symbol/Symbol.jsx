import SymbolDefaultSkin from "./Skins/Default";

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
