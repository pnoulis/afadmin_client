// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const ContextApp = React.createContext(null);

function ContextProvideApp({ ctx, children }) {
  return <ContextApp.Provider value={ctx}>{children}</ContextApp.Provider>;
}

function useContextApp() {
  const ctx = React.useContext(ContextApp);
  if (ctx == null) {
    throw new Error("<ContextProvideApp/> missing");
  }
  return ctx;
}

export { ContextProvideApp, useContextApp };
