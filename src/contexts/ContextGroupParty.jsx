// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const ContextGroupParty = React.createContext(null);

function ContextProvideGroupParty({ ctx, children }) {
  return (
    <ContextGroupParty.Provider value={ctx}>
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
