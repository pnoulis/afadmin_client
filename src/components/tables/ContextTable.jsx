import * as React from "react";

const ContextTable = React.createContext();
function ContextProvideTable({ ctx, children }) {
  return <ContextTable.Provider value={ctx}>{children}</ContextTable.Provider>;
}
function useContextTable() {
  const ctx = React.useContext(ContextTable);
  if (ctx == null) {
    throw new Error("<ContextProvideTable/> missing");
  }
  return ctx;
}

export { ContextTable, ContextProvideTable, useContextTable };
