import * as React from "react";
import { ContextProvideRegistration } from "./ContextRegistration";
import { afmachine } from "/src/services/afmachine.js";
import { catchAferrs } from "/src/err_handling/index.js";

function StoreProvideRegistration({ children }) {
  const store = useStoreRegistration();
  return (
    <ContextProvideRegistration value={store}>
      {children}
    </ContextProvideRegistration>
  );
}

function handlePlayerRegistration(form) {
  return afmachine.registerPlayer(form).catch(catchAferrs());
}

function searchPlayer(searchTerm) {
  return afmachine.searchPlayer({ searchTerm }).catch(catchAferrs());
}

function useStoreRegistration() {
  const [store, setStore] = React.useState({
    registrationQueue: [],
  });

  return {
    ...store,
    registrationStore: store,
    setRegistrationStore: setStore,
    handlePlayerRegistration,
    searchPlayer,
  };
}

export { StoreProvideRegistration, useStoreRegistration };
