import * as React from "react";
import { ContextProvideGroupParty } from "./ContextGroupParty";
import { useContextApp } from "/src/contexts/index.js";
import { groupParty } from "/src/links.jsx";
import { afmachine } from "/src/services/afmachine.js";

function StoreProvideGroupParty({ children }) {
  const store = useStoreGroupParty();
  return (
    <ContextProvideGroupParty value={store}>
      {children}
    </ContextProvideGroupParty>
  );
}

function persistPage(k, v) {
  afmachine.services.storage.client.set((store) => {
    store[groupParty.path] = {
      ...store[groupParty.path],
      [k]: v,
    };
    return store;
  });
}

function getPage() {
  return afmachine.services.storage.client.get(groupParty.path) || {};
}

function useStoreGroupParty() {
  const app = useContextApp();
  const [store, setStore] = React.useState(() => ({
      ...getPage(),
    }));

  return {
    app,
    ...store,
    groupPartyStore: store,
    setGroupPartyStore: setStore,
    persistPage,
    getPage,
  };
}

export { StoreProvideGroupParty, useStoreGroupParty };
