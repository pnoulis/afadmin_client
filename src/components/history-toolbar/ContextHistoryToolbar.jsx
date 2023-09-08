// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const ContextHistoryToolbar = React.createContext(null);

function ContextProvideHistoryToolbar({ ctx, children }) {
  return (
    <ContextHistoryToolbar.Provider value={ctx}>
      {children}
    </ContextHistoryToolbar.Provider>
  );
}

function useContextHistoryToolbar() {
  const ctx = React.useContext(ContextHistoryToolbar);
  if (ctx == null) {
    throw new Error("<ContextProvideHistoryToolbar/> missing");
  }
  return ctx;
}

export { ContextProvideHistoryToolbar, useContextHistoryToolbar };
