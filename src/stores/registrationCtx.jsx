import * as React from "react";
const RegistrationCtx = React.createContext(null);
const useRegistrationCtx = () => {
  const ctx = React.useContext(RegistrationCtx);
  if (ctx == null) {
    throw new Error("<ProvideRegistrationCtx/> missing");
  }
  return ctx;
};
const ProvideRegistrationCtx = ({ value, children }) => (
  <RegistrationCtx.Provider value={value}>{children}</RegistrationCtx.Provider>
);
export { useRegistrationCtx, ProvideRegistrationCtx };
