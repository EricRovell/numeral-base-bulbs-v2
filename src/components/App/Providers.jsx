import { StateProvider, initialState, reducer } from "components/StateProvider/Context";
import { HelmetProvider } from "react-helmet-async";
import ModuleProvider from "components/UI/Modal/context";

export default ({ children }) => (
  <HelmetProvider>
    <StateProvider {...{ initialState, reducer }}>
      <ModuleProvider>
        {children}
      </ModuleProvider>
    </StateProvider>
  </HelmetProvider>
);
