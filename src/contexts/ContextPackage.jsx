// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const ContextPackage = React.createContext(null);

function ContextProvidePackage({ ctx, children }) {
  return (
    <ContextPackage.Provider value={ctx}>{children}</ContextPackage.Provider>
  );
}

function useContextPackage() {
  const ctx = React.useContext(ContextPackage);
  if (ctx == null) {
    throw new Error("<ContextProvidePackage/> missing");
  }
  return ctx;
}

export { ContextProvidePackage, useContextPackage };
