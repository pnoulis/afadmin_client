import * as React from "react";
import { ContextProvideRegistration } from "./ContextRegistration";
import { useContextApp } from "/src/app/index.js";

function StoreProvideRegistration({ children }) {
  const store = useStoreRegistration();
  return (
    <ContextProvideRegistration value={store}>
      {children}
    </ContextProvideRegistration>
  );
}

function useStoreRegistration() {
  const { registerPlayer } = useContextApp();
  const [store, setStore] = React.useState({});
  const storeRef = React.useRef(null);
  storeRef.current = store;

  return {
    ...store,
    setStoreRegistration: setStore,
    storeRegistrationRef: storeRef,
    registerPlayer,
  };
}

export { StoreProvideRegistration, useStoreRegistration };
