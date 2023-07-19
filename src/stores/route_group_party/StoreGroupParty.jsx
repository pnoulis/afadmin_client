import * as React from "react";
import { ContextProvideGroupParty } from "./ContextGroupParty";
import { useContextApp } from "/src/stores/index.js";
import { groupParty } from "/src/links.jsx";
import { Afmachine } from '/src/app/afmachine.js'

function StoreProvideGroupParty({ children }) {
  const store = useStoreGroupParty();
  return (
    <ContextProvideGroupParty value={store}>
      {children}
    </ContextProvideGroupParty>
  );
}

function persistPage(k, v) {
  Afmachine.services.storage.client.set(function (store) {
    store[groupParty.path] = {
      ...store[groupParty.path],
      [k]: v,
    };
    return store;
  });
}

function getPage() {
  return Afmachine.services.storage.client.get(groupParty.path) || {};
}

function useStoreGroupParty() {
  const app = useContextApp();
  const [store, setStore] = React.useState(function () {
    return {
      ...getPage(),
    };
  });

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
