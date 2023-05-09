import * as React from "react";
const CtxRegistration = React.createContext(null);
const useCtxRegistration = () => {
  const ctx = React.useContext(CtxRegistration);
  if (ctx == null) {
    throw new Error("<ProvideCtxRegistration/> missing");
  }
  return ctx;
};
const ProvideCtxRegistration = ({ value, children }) => (
  <CtxRegistration.Provider value={value}>{children}</CtxRegistration.Provider>
);
const useModelRegistration = () => {
  const [modelRegistration, setModelRegistration] = React.useState({
    players: [],
  });
  const modelRegistrationRef = React.useRef(null);
  modelRegistrationRef.current = modelRegistration;
  return {
    ...modelRegistration,
    setModelRegistration,
    modelRegistrationRef,
  };
};
function ProvideStoreRegistration({ children }) {
  const model = useModelRegistration();
  return (
    <ProvideCtxRegistration value={model}>{children}</ProvideCtxRegistration>
  );
}
export { useCtxRegistration, ProvideStoreRegistration };
