import * as React from "react";

const AppCtx = React.createContext(null);

const useAppCtx = () => {
  const ctx = React.useContext(AppCtx);
  if (ctx == null) {
    throw new Error("<ProvideAppCtx/> missing");
  }
  return ctx;
};

const ProvideAppCtx = ({ value, children }) => (
  <AppCtx.Provider value={value}>{children}</AppCtx.Provider>
);

export { ProvideAppCtx, useAppCtx };
