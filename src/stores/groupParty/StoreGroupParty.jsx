import * as React from "react";
import { ContextProvideGroupParty } from "./ContextGroupParty";

function StoreProvideGroupParty({ children }) {
  const store = useStoreGroupParty();
  return (
    <ContextProvideGroupParty value={store}>
      {children}
    </ContextProvideGroupParty>
  );
}

function useStoreGroupParty() {
  const [store, setStore] = React.useState({});
  const storeRef = React.useRef(null);
  storeRef.current = store;

  return {
    ...store,
    setStoreGroupParty: setStore,
    storeGroupPartyRef: storeRef,
  };
}

export { StoreProvideGroupParty, useStoreGroupParty };
