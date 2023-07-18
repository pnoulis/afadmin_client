import * as React from "react";

const ContextApp = React.createContext(null);

function ContextProvideApp({ value, children }) {
  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
}

function useContextApp() {
  const ctx = React.useContext(ContextApp);
  if (ctx == null) {
    throw new Error("<ContextProvideApp/> missing");
  }
  return ctx;
}

export { ContextProvideApp, useContextApp };
