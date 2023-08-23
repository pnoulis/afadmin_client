// ------------------------------ std libs ------------------------------- //
// ------------------------------ 3rd libs ------------------------------- //
import * as React from "react";
// ------------------------------ own libs ------------------------------- //
// ------------------------------ project  ------------------------------- //

const ContextRegistrationQueue = React.createContext(null);

function ContextProvideRegistrationQueue({ ctx, children }) {
  return (
    <ContextRegistrationQueue.Provider value={ctx}>
      {children}
    </ContextRegistrationQueue.Provider>
  );
}

function useContextRegistrationQueue() {
  const ctx = React.useContext(ContextRegistrationQueue);
  if (ctx == null) {
    throw new Error("<ContextProvideRegistrationQueue/> missing");
  }
  return ctx;
}

export { ContextProvideRegistrationQueue, useContextRegistrationQueue };
