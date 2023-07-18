import * as React from "react";
import { ContextProvideApp } from "./ContextApp";
import { Afmachine } from "afmachine";

function StoreProvideApp({ children }) {
  const store = useStoreApp();
  return <ContextProvideApp value={store}>{children}</ContextProvideApp>;
}

function persistSession(k, v) {
  Afmachine.services.storage.session.set(function (store) {
    store = {
      ...store,
      [k]: v,
    };
    return store;
  });
}
function getSession(k) {
  return Afmachine.services.storage.session.get(k) || {};
}
function persistClient(k, v) {
  Afmachine.services.storage.client.set(function (store) {
    store = {
      ...store,
      client: {
        ...store.client,
        [k]: v,
      },
    };
    return store;
  });
}
function getClient(k) {
  return k
    ? Afmachine.services.storage.client.get("client")?.[k] || {}
    : Afmachine.services.storage.client.get() || {};
}

function useStoreApp() {
  const [store, setStore] = React.useState(function () {
    return {
      ...getSession(),
      ...getClient(),
      Afmachine,
      storid: "",
    };
  });

  return {
    ...store,
    appStore: store,
    setAppStore: setStore,
    persistSession,
    getSession,
    persistClient,
    getClient,
  };
}

export { StoreProvideApp, useStoreApp };
