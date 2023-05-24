import * as React from "react";

const ContextMerge = React.createContext(null);

function ContextProvideMerge({ value, children }) {
  return (
    <ContextMerge.Provider value={value}>{children}</ContextMerge.Provider>
  );
}

function useContextMerge() {
  const ctx = React.useContext(ContextMerge);
  if (ctx == null) {
    throw new Error("<ContextProvideMerge/> missing");
  }
  return ctx;
}

export { ContextProvideMerge, useContextMerge };
