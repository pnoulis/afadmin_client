import * as React from "react";

const ContextGroupParty = React.createContext(null);

function ContextProvideGroupParty({ value, children }) {
  return (
    <ContextGroupParty.Provider value={value}>
      {children}
    </ContextGroupParty.Provider>
  );
}

function useContextGroupParty() {
  const ctx = React.useContext(ContextGroupParty);
  if (ctx == null) {
    throw new Error("<ContextProvideGroupParty/> missing");
  }
  return ctx;
}

export { ContextProvideGroupParty, useContextGroupParty };
