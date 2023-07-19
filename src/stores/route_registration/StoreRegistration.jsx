import * as React from "react";
import { ContextProvideRegistration } from "./ContextRegistration";
import { useContextApp } from "/src/stores/index.js";
import { registration } from "/src/links.jsx";
import { Afmachine } from '/src/app/afmachine.js'

function StoreProvideRegistration({ children }) {
  const store = useStoreRegistration();
  return (
    <ContextProvideRegistration value={store}>
      {children}
    </ContextProvideRegistration>
  );
}

function persistPage(k, v) {
  Afmachine.services.storage.client.set(function (store) {
    store[registration.path] = {
      ...store[registration.path],
      [k]: v,
    };
    return store;
  });
}

function getPage() {
  return Afmachine.services.storage.client.get(registration.path) || {};
}

function useStoreRegistration() {
  const app = useContextApp();
  const [store, setStore] = React.useState(function () {
    return {
      ...getPage(),
    };
  });

  return {
    app,
    ...store,
    registrationStore: store,
    setRegistrationStore: setStore,
    persistPage,
    getPage,
  };
}

export { StoreProvideRegistration, useStoreRegistration };
