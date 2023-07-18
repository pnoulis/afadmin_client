import * as React from "react";

const ContextRegistration = React.createContext(null);

function ContextProvideRegistration({ value, children }) {
  return (
    <ContextRegistration.Provider value={value}>
      {children}
    </ContextRegistration.Provider>
  );
}

function useContextRegistration() {
  const ctx = React.useContext(ContextRegistration);
  if (ctx == null) {
    throw new Error("<ContextProvideRegistration/> missing");
  }
  return ctx;
}

export { ContextProvideRegistration, useContextRegistration };
